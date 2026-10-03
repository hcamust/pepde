import React from 'react';
import { Download, Target, Syringe } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: <Download className="w-6 h-6 text-blue-600" />,
      title: 'Erhalte sofortigen digitalen Zugang',
      description:
        'Das komplette 5-Module-System (181 technische Seiten), 41 detaillierte Peptide und 14 Protokolle landen innerhalb von Sekunden nach dem Bezahlen in deinem Posteingang.',
    },
    {
      number: '02',
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: 'Wähle dein spezifisches Protokoll',
      description:
        'Navigiere direkt zu deinem Ziel (Fettabbau, Erholung, Hypertrophie, Langlebigkeit, Haut oder Nootropika) und sehe genaue Dosierungen & Titrationskurven.',
    },
    {
      number: '03',
      icon: <Syringe className="w-6 h-6 text-emerald-600" />,
      title: 'Mit Spritzen-Präzision anwenden',
      description:
        'Verwende den Prime Dosierungsrechner, um Fläschchengröße und Wasservolumen einzugeben. Erhalte die genaue Spritzenmarkierung in IU-Einheiten ganz ohne Kopfrechnen oder Risiko.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/80 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            Einfacher 3-Schritte-Workflow
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Wie das System funktioniert
          </h2>
          <p className="mt-3 text-slate-600 text-base md:text-lg">
            Von Verwirrung zur souveränen Anwendung in Minuten. Keine endlose Recherche erforderlich.
          </p>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-soft hover:shadow-card transition-shadow relative flex flex-col items-start"
            >
              <div className="flex items-center justify-between w-full mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="font-heading font-extrabold text-3xl text-slate-200">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
