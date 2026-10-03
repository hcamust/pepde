import React from 'react';
import { Shield, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-12 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
        
        {/* Brand & Security Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-900">
          <div className="text-left">
            <span className="text-lg font-bold text-white font-heading tracking-tight">PEPTINOVA</span>
            <span className="text-xs text-blue-400 font-mono block">Das Master-Peptid-Anwendungssystem</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-blue-400" /> 256-Bit SSL gesichert
            </span>
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-emerald-400" /> 7-Tage-Garantie
            </span>
          </div>
        </div>

        {/* Medical & Legal Disclaimer */}
        <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 text-[11px] text-slate-400 leading-relaxed text-justify max-w-4xl mx-auto">
          <strong>Medizinischer Haftungsausschluss:</strong> Der im Peptinova System bereitgestellte Inhalt dient ausschließlich zu Bildungs-, Informations- und Forschungsreferenzzwecken. Er ist nicht als medizinische Beratung, Diagnose oder verschreibungspflichtige Behandlung gedacht. Konsultiere immer einen qualifizierten Arzt oder zugelassenen Gesundheitsdienstleister, bevor du mit einem Peptid-, Ergänzungs- oder Gesundheitsprotokoll beginnst. Alle wissenschaftlichen Zitate beziehen sich auf veröffentlichte präklinische oder klinische Forschungsliteratur.
        </div>

        {/* Links & Copyright */}
        <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-xs">
          <a href="#" className="hover:text-white transition-colors">Datenschutzbestimmungen</a>
          <a href="#" className="hover:text-white transition-colors">Nutzungsbedingungen</a>
          <a href="#" className="hover:text-white transition-colors">Rückerstattungsrichtlinie</a>
          <a href="#" className="hover:text-white transition-colors">Wissenschaftliche Referenzen</a>
          <a href="#" className="hover:text-white transition-colors">Support kontaktieren</a>
        </div>

        <p className="text-[11px] text-slate-400">
          &copy; {new Date().getFullYear()} Peptinova System. Alle Rechte vorbehalten. Eingetragenes Warenzeichen.
        </p>

      </div>
    </footer>
  );
};
