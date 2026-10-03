import { Button } from '@/components/ui/button';
import { Shield, Star, CheckCircle2, ArrowRight, Zap, BookOpen, Calculator, FileCheck } from 'lucide-react';

interface HeroProps {
  onOpenCheckout: () => void;
  ctaRef?: React.RefObject<HTMLDivElement | null>;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout, ctaRef }) => {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/40 to-slate-50 border-b border-slate-200/80">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-200/30 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-100/40 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Rating Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-blue-200/80 shadow-sm rounded-full px-4 py-1.5 mb-6 text-xs md:text-sm font-medium text-slate-700">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
            ))}
          </div>
          <span className="font-bold text-slate-900">4,9 / 5,0 Bewertung</span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-600">Verifizierter wissenschaftlich fundierter Protokoll-Leitfaden</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto font-heading">
          Meistere Peptid-Protokolle mit einem <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent">kompletten System</span> — einfach erklärt
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
          Fettabbau, Zellreparatur, Hautverjüngung, Fokus & Langlebigkeit. <strong className="text-slate-900 font-semibold">41 Peptide detailliert beschrieben</strong> (Mechanismus, präzise Dosierung, Halbwertszeit und Stacks), 14 gebrauchsfertige Protokolle und sofortige Spritzen-Mathematik-Berechnung.
        </p>

        {/* Hero Visual Card / Mockup Feature */}
        <div className="mt-8 max-w-3xl mx-auto bg-white rounded-2xl p-6 md:p-8 shadow-card border border-slate-200/80 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5" /> Sofortiger digitaler Zugang • Keine Wartezeit
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
            <div className="flex flex-col items-center justify-center p-3.5 bg-slate-50 rounded-xl border border-slate-100">
              <BookOpen className="w-6 h-6 text-blue-600 mb-1" />
              <span className="text-xl md:text-2xl font-bold text-slate-900">181</span>
              <span className="text-xs text-slate-500 font-medium">Technische Seiten</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3.5 bg-slate-50 rounded-xl border border-slate-100">
              <Zap className="w-6 h-6 text-blue-600 mb-1" />
              <span className="text-xl md:text-2xl font-bold text-slate-900">41</span>
              <span className="text-xs text-slate-500 font-medium">Peptide beschrieben</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3.5 bg-slate-50 rounded-xl border border-slate-100">
              <FileCheck className="w-6 h-6 text-blue-600 mb-1" />
              <span className="text-xl md:text-2xl font-bold text-slate-900">14</span>
              <span className="text-xs text-slate-500 font-medium">Fertige Protokolle</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3.5 bg-slate-50 rounded-xl border border-slate-100">
              <Calculator className="w-6 h-6 text-emerald-600 mb-1" />
              <span className="text-xl md:text-2xl font-bold text-emerald-700">IE Mathe</span>
              <span className="text-xs text-slate-500 font-medium">Spritzenrechner</span>
            </div>
          </div>

          {/* Core Feature Bullet Highlights */}
          <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Vollständige Rekonstitution & Bakteriostatisches Wasser Mathe</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zitierte wissenschaftliche PubMed-Referenzen (Autor & Jahr)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>3 Bonus-Leitfäden + 2 kostenlose Geschenke heute inklusive</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>100% risikofreie 7-Tage-Geld-zurück-Garantie</span>
            </div>
          </div>
        </div>

        {/* CTA Button Group */}
        <div ref={ctaRef} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Button 
            size="lg" 
            className="w-full sm:w-auto text-lg font-bold py-4 px-8 shadow-button rounded-xl flex items-center justify-center gap-2 group"
            onClick={onOpenCheckout}
          >
            <span>JETZT SOFORTIGEN ZUGANG ERHALTEN</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <p className="mt-3 text-xs text-slate-500 font-medium flex items-center justify-center gap-2">
          <Shield className="w-3.5 h-3.5 text-emerald-600" />
          Einmalige Zahlung • Lebenslanger Zugang • Kostenlose zukünftige Updates • 256-Bit sicheres SSL
        </p>
      </div>
    </section>
  );
};
