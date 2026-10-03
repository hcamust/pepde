import React from 'react';
import { Gift, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import bonus1Image from '@/assets/images/bonus-1-prime-calculator.webp';
import bonus2Image from '@/assets/images/bonus-2-smart-buyer.webp';
import bonus3Image from '@/assets/images/bonus-3-tracking-system.webp';
import gift1Image from '@/assets/images/gift-1-master-map.webp';
import gift2Image from '@/assets/images/gift-2-prime-glossary.webp';

interface BonusesProps {
  onOpenCheckout: () => void;
}

export const Bonuses: React.FC<BonusesProps> = ({ onOpenCheckout }) => {
  const bonusItems = [
    {
      type: 'BONUS 01',
      title: 'Prime Spritzenrechner App',
      value: '$37 Wert',
      desc: 'Interaktive herunterladbare Tabelle (Excel, Google Sheets, LibreOffice) mit voreingestellten automatisierten Formeln für 41 Peptide. Berechne IU-Spritzeneinheiten nie wieder manuell.',
      image: bonus1Image,
      color: 'border-blue-200 bg-white',
    },
    {
      type: 'BONUS 02',
      title: 'Smart Buyer Prüfungsleitfaden',
      value: '$29 Wert',
      desc: 'Wie man Lieferanten prüft, HPLC-Reinheitstests verifiziert, Analysezertifikate (COA) liest und gefälschte oder unterdosierte gefriergetrocknete Fläschchen vermeidet.',
      image: bonus2Image,
      color: 'border-blue-200 bg-white',
    },
    {
      type: 'BONUS 03',
      title: 'Protokoll-Tracking-System',
      value: '$27 Wert',
      desc: 'Benutzerdefinierte Protokollvorlagen (Notion, druckbare PDF & Tabellen), um Startdaten, Körpermaße, Dosierungssteigerungskurven und Ergebnisse zu verfolgen.',
      image: bonus3Image,
      color: 'border-blue-200 bg-white',
    },
    {
      type: 'GIFT 01',
      title: 'Peptid-Master-Map Diagramm',
      value: '$19 Wert',
      desc: 'Visueller Entscheidungsbaum auf einen Blick, der spezifische Gesundheits- oder Leistungsziele in Sekunden direkt dem genauen Ziel-Peptid zuordnet.',
      image: gift1Image,
      color: 'border-emerald-200 bg-emerald-50/40',
    },
    {
      type: 'GIFT 02',
      title: 'Essenzielles Peptid-Glossar',
      value: '$15 Wert',
      desc: 'Leicht verständliche Aufschlüsselung von 50 Fachbegriffen — Halbwertszeit, Lyophilisierung, Rekonstitution, mcg vs. IU, Rezeptoraffinität und Lagertemperaturen.',
      image: gift2Image,
      color: 'border-emerald-200 bg-emerald-50/40',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Gift className="w-3.5 h-3.5" /> Heute kostenlos inklusive
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            3 Bonus-Tools + 2 kostenlose Geschenke ($127 Gesamtwert)
          </h2>
          <p className="mt-3 text-slate-600 text-base md:text-lg">
            Vervollständige dein Peptid-Kit mit diesen sofort einsatzbereiten Ressourcen, die ohne zusätzliche Kosten enthalten sind.
          </p>
        </div>

        {/* Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {bonusItems.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border shadow-soft hover:shadow-card transition-shadow flex flex-col overflow-hidden ${item.color}`}
            >
              <img
                src={item.image}
                alt={item.title}
                width={700}
                height={500}
                loading="lazy"
                decoding="async"
                className="w-full aspect-[7/5] object-cover"
              />

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold font-mono text-blue-700 bg-blue-100/80 px-2.5 py-1 rounded-full">
                      {item.type}
                    </span>
                    <span className="text-xs font-bold text-slate-400 line-through">
                      {item.value}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-emerald-600" /> Kostenlos heute inklusive
                  </span>
                  <span className="text-slate-400 line-through font-bold normal-case">{item.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2 Gifts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {bonusItems.slice(3, 5).map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border shadow-soft hover:shadow-card transition-shadow overflow-hidden flex flex-col ${item.color}`}
            >
              <img
                src={item.image}
                alt={item.title}
                width={700}
                height={500}
                loading="lazy"
                decoding="async"
                className="w-full aspect-[7/5] object-cover"
              />

              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold font-mono text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    {item.type}
                  </span>
                  <span className="text-xs font-bold text-slate-400 line-through">
                    {item.value}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1 font-heading">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-3 flex items-center gap-1 text-xs font-bold text-emerald-700">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Kostenloses Geschenk mit Systemzugang
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Gift Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 md:p-8 text-center border border-blue-800 shadow-xl max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold font-heading mb-2">
            Erhalte alle 5 Boni &amp; Geschenke inklusive für <span className="text-emerald-400">$0 Extra</span>
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Wenn du dir heute deine Kopie des Peptinova Systems sicherst, werden alle 3 Boni und 2 Geschenke sofort in deinem Konto freigeschaltet.
          </p>
          <Button
            size="lg"
            className="w-full sm:w-auto h-auto min-h-14 font-bold py-4 px-4 sm:px-8 shadow-button rounded-xl text-sm sm:text-lg whitespace-normal text-center leading-snug"
            onClick={onOpenCheckout}
          >
            <span>SYSTEM &amp; ALLE 5 BONI JETZT SICHERN</span>
            <ArrowRight className="ml-2 w-5 h-5 shrink-0 inline-block align-text-bottom" />
          </Button>
        </div>

      </div>
    </section>
  );
};
