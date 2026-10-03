import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ValueStackProps {
  onOpenCheckout: () => void;
}

const stackItems = [
  {
    tag: 'Kern',
    desc: '5 komplette Module — 181 Seiten, 41 Peptide, 14 Protokolle',
    price: '97,00 €',
  },
  {
    tag: 'Bonus 1',
    desc: 'Prime Spritzenrechner App (Tabelle)',
    price: '37,00 €',
  },
  {
    tag: 'Bonus 2',
    desc: 'Smart Buyer Vetting Guide (Anbieter & COA)',
    price: '29,00 €',
  },
  {
    tag: 'Bonus 3',
    desc: 'Protokoll-Tracking-System (Tracker)',
    price: '27,00 €',
  },
  {
    tag: 'Geschenk 1',
    desc: 'Peptid-Masterplan — das richtige Peptid für Ihr Ziel',
    price: '19,00 €',
  },
  {
    tag: 'Geschenk 2',
    desc: 'Wesentliches Peptid-Glossar — 50 Begriffe einfach erklärt',
    price: '15,00 €',
  },
];

export const ValueStack: React.FC<ValueStackProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative border-b border-slate-200/80">
      <div className="max-w-2xl mx-auto px-4">
        <div className="rounded-3xl border border-slate-200 shadow-card bg-white overflow-hidden">
          {/* Header */}
          <div className="p-6 md:p-8 pb-4 text-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
              <span className="h-px w-6 bg-blue-300" /> Was Sie heute erhalten <span className="h-px w-6 bg-blue-300" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading">
              Alles, was das <span className="text-blue-700">Peptinova System</span> beinhaltet
            </h2>
          </div>

          <div className="border-t border-dashed border-slate-200 mx-6 md:mx-8" />

          {/* Line Items */}
          <div className="px-6 md:px-8 divide-y divide-slate-100">
            {stackItems.map((item, idx) => (
              <div key={idx} className="flex items-start justify-between gap-4 py-4">
                <p className="text-sm sm:text-base text-slate-700 leading-snug">
                  <span className="font-extrabold text-blue-800 italic">{item.tag}</span>{' '}
                  {item.desc}
                </p>
                <span className="font-bold text-slate-900 whitespace-nowrap shrink-0">{item.price}</span>
              </div>
            ))}
          </div>

          {/* Total / Price / Savings */}
          <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 text-white p-6 md:p-8 mt-2">
            <div className="flex items-center justify-between py-2 border-b border-white/10">
              <span className="text-slate-300 text-sm sm:text-base">Tatsächlicher Gesamtwert</span>
              <span className="text-rose-400 line-through font-bold text-lg">224,00 €</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-blue-300 italic font-semibold text-sm sm:text-base">Ihr heutiger Preis</span>
              <span className="text-3xl font-extrabold">27 €</span>
            </div>
            <div className="mt-2 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-center py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wide">
              Sie sparen 197 € · Einführungspreis
            </div>

            <Button
              size="lg"
              className="w-full mt-6 text-base font-bold py-4 rounded-xl shadow-button flex items-center justify-center gap-2 group"
              onClick={onOpenCheckout}
            >
              <span>JETZT SOFORTIGEN ZUGANG SICHERN</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="mt-3 text-center text-xs text-slate-400">Einmalige Zahlung · Kein Abo</p>
          </div>
        </div>
      </div>
    </section>
  );
};
