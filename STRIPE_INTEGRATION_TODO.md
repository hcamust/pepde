# Stripe Integration — Remaining Setup

This file is the **single source of truth** for finishing the Stripe Checkout
integration. The code changes are done; the steps below are what you must do
before the payment form works end to end.

The integration uses **Embedded form (custom payment form)** — the payment form
renders inside a Stripe-hosted iframe on the `/checkout` page of the landing site,
and a small server endpoint creates the Checkout Session.

---

## Values to Replace

The following values are placeholders and must be updated before going live.

**Files containing placeholders:**

- [server/index.js](server/index.js)
- [.env.example](.env.example) → copy to `.env`
- [server/.env.example](server/.env.example) → copy to `server/.env`

| Field                         | Current Value                                                                                                 | What to Set                                                                                                                                                                                                                                        |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mode`                        | `payment`                                                                                                     | `"payment"` for the one-time digital product (current), or `"subscription"` if you switch to recurring billing. If you change to `"subscription"`, also add `payment_method_collection: "always"` to the session (see Configured Parameters note). |
| `line_items[].price`          | `price_...`                                                                                                   | Your real Stripe **Price ID** from the Dashboard (https://dashboard.stripe.com/prices) or API.                                                                                                                                                     |
| `VITE_STRIPE_PUBLISHABLE_KEY` | `pk_test_...` | Your Stripe **publishable** key — Dashboard → Developers → API keys. Browser-safe; must keep the `VITE_` prefix so Vite exposes it to the client.                                                                                                  |
| `STRIPE_SECRET_KEY`           | `sk_test_...` | Your Stripe **secret** key (server only — no `VITE_` prefix). Already required by the webhook service.                                                                                                                                             |
| `STRIPE_WEBHOOK_SECRET`       | `whsec_xxx`                                                                                                   | Signing secret from the webhook endpoint (already used by the existing webhook handler).                                                                                                                                                           |
| `DOMAIN`                      | `http://localhost:3000`                                                                                       | Public origin of the landing page (e.g. `https://www.peptinova.store`). Used to build the Checkout `return_url` that sends buyers to `/gracias` after payment.                                                                                     |

---

## Configured Parameters

These parameters were configured in Checkout Studio and are already set correctly
in the code — **do not change them**.

**Files containing these parameters:**

- [server/index.js](server/index.js) — Checkout Session parameters
- [src/Checkout.tsx](src/Checkout.tsx) — form `appearance`

| Parameter                            | Value                      |
| ------------------------------------ | -------------------------- |
| `ui_mode`                            | `custom`                   |
| `billing_address_collection`         | `auto`                     |
| `phone_number_collection.enabled`    | `false`                    |
| `automatic_tax.enabled`              | `false`                    |
| `submit_type`                        | `auto`                     |
| `name_collection.individual.enabled` | `true`                     |
| `integration_identifier`             | `custom_embedded_web_0001` |

Notes:

- **`payment_method_collection`** was configured as `always` in Checkout Studio,
  but it only applies to `mode: "subscription"`. Because this integration uses
  `mode: "payment"`, it is intentionally omitted. Add
  `payment_method_collection: "always"` **only if** you switch `mode` to
  `"subscription"`.
- **`ui_mode` version dependency:** the installed Stripe Node SDK is
  `stripe@17.7.0` (< 21.0.0), which uses `ui_mode: "custom"`. If you upgrade the
  server SDK to **21.0.0 or newer**, change `ui_mode` to `"form"` in
  `server/index.js`.
- **API version:** the server Stripe client is pinned to
  `2026-03-25.dahlia; custom_checkout_payment_form_preview=v1` — required for the
  custom checkout payment form. Do not remove it.

---

## Setup Instructions

### 1. Environment variables

**Client (`.env` at repo root — git-ignored):**

```
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

**Server (`server/.env` — git-ignored):**

```
DOMAIN=https://your-domain.example
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
# (existing SMTP + PRODUCT_ACCESS_URL vars stay as they are)
```

### 2. Dependencies

Already installed — nothing to add:

- Client: Stripe.js is loaded from `https://js.stripe.com/dahlia/stripe.js` in
  `index.html` (never bundled — PCI requirement).
- Server: `stripe` (`^17.4.0`) is already a dependency of `server/package.json`.

Run `npm install` in both the repo root and `server/` if you have not yet.

### 3. Run it

```bash
# terminal 1 — landing page (Vite dev server on :3000)
npm run dev

# terminal 2 — checkout + webhook server (Express on :4242)
cd server && npm start
```

In development, the browser calls `POST /api/create-checkout-session` on the same
origin as the page. Point that path at the Express server — either add a Vite dev
proxy for `/api`, or run both behind the same nginx `location /api/` block you
already use in production (see `server/README.md`).

---

## Project Structure — New / Changed Files

| File                  | Change                                                                                                                                                                                       |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `server/index.js`     | Added `POST /api/create-checkout-session` (creates the embedded Checkout Session, returns `{ client_secret }`). Pinned the Stripe API version. Added optional `DOMAIN` env var.              |
| `server/.env.example` | Added `DOMAIN`.                                                                                                                                                                              |
| `src/Checkout.tsx`    | **New.** Renders the embedded payment form: initializes Stripe.js with the `custom_checkout_payment_form_1` beta, fetches the client secret, mounts the form, and wires the `confirm` event. |
| `src/main.tsx`        | Routes `/checkout` to the new `Checkout` component (same pattern as `/gracias`).                                                                                                             |
| `src/App.tsx`         | CTA buttons now open `/checkout` by default (still overridable via `VITE_CHECKOUT_URL`).                                                                                                     |
| `index.html`          | Loads `https://js.stripe.com/dahlia/stripe.js` in `<head>`.                                                                                                                                  |
| `.env.example`        | Added `VITE_STRIPE_PUBLISHABLE_KEY`; made `VITE_CHECKOUT_URL` an optional override.                                                                                                          |
| `src/vite-env.d.ts`   | Typed the `VITE_` env vars.                                                                                                                                                                  |

---

## How the Integration Works

1. A visitor clicks any CTA on the landing page → the browser navigates to
   `/checkout`, which renders `src/Checkout.tsx`.
2. `Checkout.tsx` calls `Stripe(publishableKey, { betas: ['custom_checkout_payment_form_1'] })`
   and `POST`s to `/api/create-checkout-session`.
3. The Express endpoint calls `stripe.checkout.sessions.create(...)` with the
   Checkout Studio parameters and returns `{ client_secret }` as JSON (never a
   redirect).
4. The browser passes that client secret to `stripe.initCheckoutFormSdk(...)`,
   creates the form, mounts it into `<div id="checkout-form">`, and confirms
   payment via `loadActions().actions.confirm(...)`.
5. On success, Stripe redirects the buyer to
   `DOMAIN/gracias?session_id={CHECKOUT_SESSION_ID}` (the existing thank-you page).
6. Stripe sends `checkout.session.completed` to the **existing** webhook at
   `/api/webhook/stripe`, which emails the buyer their access link (unchanged).

---

## Testing

Use Stripe **test mode** keys (`pk_test_...` / `sk_test_...`).

Test cards (any future expiry, any CVC, any postal code):

| Scenario                      | Number                |
| ----------------------------- | --------------------- |
| Successful payment            | `4242 4242 4242 4242` |
| Requires authentication (3DS) | `4000 0025 0000 3155` |
| Declined (generic)            | `4000 0000 0000 0002` |
| Declined (insufficient funds) | `4000 0000 0000 9995` |

To test the webhook locally, use the Stripe CLI:

```bash
stripe listen --forward-to localhost:4242/api/webhook/stripe
stripe trigger checkout.session.completed
```

---

## Next Steps

- **Create the product & price** in the Stripe Dashboard and paste the real
  Price ID into `server/index.js` (`line_items[].price`).
- **Fulfillment / order tracking:** the `checkout.session.completed` webhook
  already emails the access link. Add any DB write / CRM sync there if you need a
  record of orders.
- **Go live:** swap all `pk_test_` / `sk_test_` / `whsec_` values for live-mode
  keys, set `DOMAIN` to the production origin, and register the live webhook
  endpoint (test and live webhooks are separate — see `server/README.md`).

---

## Resources

- https://support.stripe.com
- https://docs.stripe.com/mcp
