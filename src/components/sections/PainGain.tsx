import React from 'react';
import { XCircle, CheckCircle2, AlertTriangle, Sparkles, ArrowDown } from 'lucide-react';

export const PainGain: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Pain Card - The Real Problem */}
        <div className="bg-red-50/50 border border-red-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 font-heading">
                Der wahre Grund, warum die meisten Peptid-Protokolle scheitern
              </h3>
              <p className="text-sm text-red-700 font-medium">Warum Ratschläge aus Foren zu Fehlern führen</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base text-slate-700">
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-red-100 shadow-xs">
              <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <span><strong>Widersprüchliche Dosierungen in Foren:</strong> Ein Beitrag behauptet 250mcg, ein anderer sagt 500mcg, was Sie beim Ausprobieren an Ihrem eigenen Körper im Ungewissen lässt.</span>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-red-100 shadow-xs">
              <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <span><strong>Verstreute medizinische Studien:</strong> Die Forschung existiert, aber sie ist in Dutzenden von dichten Artikeln vergraben, für deren Verständnis man einen Abschluss in Biochemie bräuchte.</span>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-red-100 shadow-xs">
              <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <span><strong>Fehler bei der Rekonstitutionsberechnung:</strong> Niemand erklärt das genaue Verhältnis zwischen dem Volumen von bakteriostatischem Wasser und den IE-Einheiten einer Insulinspritze.</span>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-red-100 shadow-xs">
              <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <span><strong>Verschwendetes Geld:</strong> Verlust von 300 € – 1.000 €+ on improper cycles, wrong peptides for your specific goal, or canceled benefits.</span>
            </div>
          </div>
        </div>

        {/* Transformation Divider */}
        <div className="flex flex-col items-center justify-center my-8 text-blue-600">
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </div>

        {/* Gain Card - The Solution */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-card border border-blue-800/50 relative overflow-hidden">
          {/* Subtle Light Effect */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white font-heading">
                Was Sie mit dem Peptinova-System erreichen
              </h3>
              <p className="text-sm text-blue-200">Absolute Klarheit ab dem ersten Tag — kein Ausprobieren nötig</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base relative z-10">
            <div className="flex items-start gap-3 bg-blue-900/40 border border-blue-700/50 p-4 rounded-xl backdrop-blur-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-slate-100"><strong className="text-white">Absolute Klarheit:</strong> Wissen Sie genau, welches Peptid, welche Dosis, welcher Weg und welche Halbwertszeit zu verwenden ist for fat loss, recovery, skin, or longevity.</span>
            </div>
            <div className="flex items-start gap-3 bg-blue-900/40 border border-blue-700/50 p-4 rounded-xl backdrop-blur-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-slate-100"><strong className="text-white">Exakte Spritzen-Mathematik:</strong> Nutzen Sie unseren integrierten Rechner, um Milligramm pro Fläschchen + BAC-Wasser in exakte Spritzeneinheiten (IU) umzuwandeln.</span>
            </div>
            <div className="flex items-start gap-3 bg-blue-900/40 border border-blue-700/50 p-4 rounded-xl backdrop-blur-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-slate-100"><strong className="text-white">Zitierte PubMed-Referenzen:</strong> Jedes einzelne Protokoll nennt Autor, Jahr und Studiendaten, sodass Sie alles selbst überprüfen können.</span>
            </div>
            <div className="flex items-start gap-3 bg-blue-900/40 border border-blue-700/50 p-4 rounded-xl backdrop-blur-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-slate-100"><strong className="text-white">Hunderte sparen:</strong> Vermeiden Sie verschwendete Fläschchen, Qualitätsverlust durch falsche Lagerung und ineffektive Stacks gleich bei Ihrer ersten Dosis.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
