import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      q: 'Ist dies ein physisches Buch oder ein sofortiger digitaler Zugang?',
      a: 'Peptinova ist 100% digital. Unmittelbar nach dem Bezahlen erhältst du sofortigen Zugriff auf alle 5 PDF-Module (181 Seiten), die 14 fertigen Protokolle, den interaktiven Web-Rechner und alle 3 Boni + 2 Geschenke. Du kannst es jederzeit auf deinem Handy, Tablet oder Laptop lesen.',
    },
    {
      q: 'Wie funktioniert der Spritzen-Dosierungsrechner?',
      a: 'Mit dem Rechner kannst du die spezifische Milligramm-Größe deines Fläschchens (z. B. 5mg oder 10mg), das Volumen des bakteriostatischen Wassers, das du in das Fläschchen injiziert hast (z. B. 2ml), und deine Zieldosis in Mikrogramm (z. B. 250mcg) eingeben. Er gibt automatisch die genaue IU-Markierung aus, auf die du den Kolben deiner U-100 oder U-50 Insulinspritze ziehen musst.',
    },
    {
      q: 'Ich habe noch nie Peptide verwendet. Ist das für Anfänger geeignet?',
      a: 'Ja, absolut. Das System wurde speziell strukturiert, um die Lücke zwischen anfänglicher Verwirrung und fachkundiger Anwendung zu schließen. Modul 01 führt dich Schritt für Schritt durch grundlegende Biochemie, sterile Rekonstitution, Lagertemperaturen und die Vermeidung häufiger Fehler bei der Spritzenberechnung.',
    },
    {
      q: 'Sind die Studienzitate echt und überprüfbar?',
      a: 'Ja. Im Gegensatz zu Forenbeiträgen oder Social-Media-Behauptungen zitiert jedes einzelne Protokoll in Peptinova den Autor, das Jahr und das veröffentlichte, peer-reviewte Journal-Paper (PubMed/NCBI), damit du die Forschung nachschlagen und die Ergebnisse selbst überprüfen kannst.',
    },
    {
      q: 'Was ist, wenn ich mit dem System nicht zufrieden bin?',
      a: 'Wir bieten eine bedingungslose 100%ige 7-Tage-Geld-zurück-Garantie. Wenn du der Meinung bist, dass der Leitfaden und der Rechner dir weder Zeit noch Geld gespart haben, sende uns einfach innerhalb von 7 Tagen eine E-Mail für eine vollständige Rückerstattung — ohne Fragen zu stellen.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative border-b border-slate-200/80">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Klare Antworten
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Häufig gestellte Fragen
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Alles, was du über das Peptinova System wissen musst, bevor du anfängst.
          </p>
        </div>

        {/* Accordion List */}
        <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 shadow-soft">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger className="text-left font-bold text-slate-900 text-base md:text-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
};
