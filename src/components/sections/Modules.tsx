import React from 'react';
import { BookOpen, Shield, Flame, Brain, Heart, Sparkles, Check } from 'lucide-react';

export const Modules: React.FC = () => {
  const modulesList = [
    {
      num: '01',
      title: 'Grundlagen & Rekonstitution',
      desc: 'Verstehe Peptid-Biochemie, Halbwertszeit-Mechanik, die Rekonstitution mit BAC-Wasser, sterile Injektionsprotokolle und wie du Abbau verhinderst.',
      icon: <BookOpen className="w-5 h-5 text-blue-600" />,
    },
    {
      num: '02',
      title: 'Körperrekomposition & Fettabbau',
      desc: 'GLP-1/GIP-Rezeptoragonisten, Wachstumshormon-Sekretagoga, Reduktion von viszeralem Fett, gezielte Lipolyse und Erhalt der fettfreien Muskelmasse.',
      icon: <Flame className="w-5 h-5 text-amber-500" />,
    },
    {
      num: '03',
      title: 'Zellschutz & Geweberegeneration',
      desc: 'Beschleunigte Regeneration von Sehnen, Bändern, Darmschleimhaut und Gelenken über angiogene und systemisch entzündungshemmende Peptid-Signalwege.',
      icon: <Shield className="w-5 h-5 text-emerald-600" />,
    },
    {
      num: '04',
      title: 'Nootropika, Geist & Langlebigkeit',
      desc: 'Neurogenese, Brain-derived neurotrophic factor (BDNF), mitochondriale Optimierung, Telomerverlängerung und Angstmodulation.',
      icon: <Brain className="w-5 h-5 text-purple-600" />,
    },
    {
      num: '05',
      title: 'Der Protokollraum (14 fertige Pläne)',
      desc: 'Schritt-für-Schritt-Stack-Pläne mit exakten Wochenplänen, Titrationsschritten, synergistischen Kombinationen und Zyklus-Zeitplänen.',
      icon: <Heart className="w-5 h-5 text-red-500" />,
    },
  ];

  const peptidesCatalog = [
    { name: 'Tirzepatide', cat: 'Fettabbau' },
    { name: 'Semaglutide', cat: 'Fettabbau' },
    { name: 'Retatrutide', cat: 'Fettabbau' },
    { name: 'AOD-9604', cat: 'Fettabbau' },
    { name: 'Frag 176-191', cat: 'Fettabbau' },
    { name: 'BPC-157', cat: 'Regeneration' },
    { name: 'TB-500', cat: 'Regeneration' },
    { name: 'KPV', cat: 'Regeneration' },
    { name: 'GHK-Cu', cat: 'Haut & Reparatur' },
    { name: 'CJC-1295', cat: 'Muskel' },
    { name: 'Ipamorelin', cat: 'Muskel' },
    { name: 'IGF-1 LR3', cat: 'Muskel' },
    { name: 'Tesamorelin', cat: 'Muskel' },
    { name: 'MK-677', cat: 'Muskel' },
    { name: 'Semax', cat: 'Nootropic' },
    { name: 'Selank', cat: 'Nootropic' },
    { name: 'NAD+', cat: 'Langlebigkeit' },
    { name: 'MOTS-c', cat: 'Langlebigkeit' },
    { name: 'Epithalon', cat: 'Langlebigkeit' },
    { name: 'PT-141', cat: 'Libido' },
    { name: 'Melanotan II', cat: 'Haut' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/80 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            Umfassender Lehrplan
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            In den 5 Modulen &amp; 181 technischen Seiten
          </h2>
          <p className="mt-3 text-slate-600 text-base md:text-lg">
            Alles logisch strukturiert, damit du nie wieder Foren durchsuchen oder Dosierungen raten musst.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {modulesList.map((m, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all ${
                idx === 4
                  ? 'md:col-span-2 bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 text-white border-blue-700/50 shadow-card'
                  : 'bg-slate-50/80 border-slate-200/80 hover:bg-white hover:shadow-soft text-slate-900'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    idx === 4 ? 'bg-blue-800 border border-blue-600' : 'bg-white border border-slate-200 shadow-xs'
                  }`}>
                    {m.icon}
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wider ${idx === 4 ? 'text-blue-300' : 'text-blue-700'}`}>
                    Modul {m.num}
                  </span>
                </div>
                <span className={`text-xs font-mono font-bold ${idx === 4 ? 'text-blue-400' : 'text-slate-400'}`}>
                  Geprüfte Referenz
                </span>
              </div>
              <h3 className={`text-xl font-bold font-heading mb-2 ${idx === 4 ? 'text-white' : 'text-slate-900'}`}>
                {m.title}
              </h3>
              <p className={`text-sm leading-relaxed ${idx === 4 ? 'text-slate-300' : 'text-slate-600'}`}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mapped Peptides Catalog Pill Cloud */}
        <div className="bg-gradient-to-b from-blue-50/60 to-slate-50 rounded-2xl p-6 md:p-8 border border-blue-200/70 text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">
            <Sparkles className="w-4 h-4 text-blue-600" /> Umfassende Katalogisierung
          </div>
          <h3 className="text-2xl font-bold text-slate-900 font-heading mb-4">
            41 Peptide vollständig katalogisiert (Dosis, Weg, Halbwertszeit &amp; Stacks)
          </h3>

          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto mb-4">
            {peptidesCatalog.map((p, idx) => (
              <span
                key={idx}
                className="bg-white border border-blue-200/80 hover:border-blue-400 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-xs flex items-center gap-1.5"
              >
                <Check className="w-3 h-3 text-emerald-600" />
                <span>{p.name}</span>
                <span className="text-[10px] text-blue-600 font-mono bg-blue-50 px-1.5 py-0.2 rounded">
                  {p.cat}
                </span>
              </span>
            ))}
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-xs">
              + 20 weitere erfasste Peptide
            </span>
          </div>

          <p className="text-xs text-slate-500 italic">
            Jedes Peptid enthält Wirkmechanismus, Rekonstitutionsformel, Hinweise zur subkutanen vs. intramuskulären Anwendung sowie mögliche Nebenwirkungen.
          </p>
        </div>

      </div>
    </section>
  );
};
