import fs from 'fs';
import path from 'path';

const dir = 'src/components/sections';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const dict = {
  'Wasted money:': 'Verschwendetes Geld:',
  'Losing 300 €–1.000 €+': 'Verlust von 300 € – 1.000 €+',
  'What You Achieve With Peptinova System': 'Was Sie mit dem Peptinova-System erreichen',
  'The Real Reason Most Peptide Protocols Fail': 'Der wahre Grund, warum die meisten Peptid-Protokolle scheitern',
  'Why piecing together forum advice creates mistakes': 'Warum Ratschläge aus Foren zu Fehlern führen',
  'Total Clarity:': 'Absolute Klarheit:',
  'Exact Syringe Math:': 'Exakte Spritzen-Mathematik:',
  'Cited PubMed References:': 'Zitierte PubMed-Referenzen:',
  'Save Hundreds:': 'Hunderte sparen:',
  'GET INSTANT ACCESS NOW': 'JETZT SOFORTIGEN ZUGANG SICHERN',
  'One-time payment · No subscription': 'Einmalige Zahlung · Kein Abo',
  'Total Real Value': 'Tatsächlicher Gesamtwert',
  'Your Price Today': 'Ihr heutiger Preis',
  'You Save': 'Sie sparen',
  'Introductory Price': 'Einführungspreis',
  'Core': 'Kern',
  'Bonus 1': 'Bonus 1',
  'Bonus 2': 'Bonus 2',
  'Bonus 3': 'Bonus 3',
  'Gift 1': 'Geschenk 1',
  'Gift 2': 'Geschenk 2',
  'Everything': 'Alles, was das',
  'Includes': 'beinhaltet',
  'What You Get Today': 'Was Sie heute erhalten',
  'Contradictory forum doses:': 'Widersprüchliche Dosierungen in Foren:',
  'Scattered medical studies:': 'Verstreute medizinische Studien:',
  'Reconstitution math errors:': 'Fehler bei der Rekonstitutionsberechnung:',
  'Total clarity from day one — zero trial and error': 'Absolute Klarheit ab dem ersten Tag — kein Ausprobieren nötig',
  'Know exactly which peptide, dose, route, and half-life to use': 'Wissen Sie genau, welches Peptid, welche Dosis, welcher Weg und welche Halbwertszeit zu verwenden ist',
  'Use our integrated calculator to convert vial mg + BAC water into exact syringe units (IU).': 'Nutzen Sie unseren integrierten Rechner, um Milligramm pro Fläschchen + BAC-Wasser in exakte Spritzeneinheiten (IU) umzuwandeln.',
  'Every single protocol cites author, year, and study data so you can verify everything yourself.': 'Jedes einzelne Protokoll nennt Autor, Jahr und Studiendaten, sodass Sie alles selbst überprüfen können.',
  'Avoid wasted vials, improper storage degradation, and ineffective stacks right from your first dose.': 'Vermeiden Sie verschwendete Fläschchen, Qualitätsverlust durch falsche Lagerung und ineffektive Stacks gleich bei Ihrer ersten Dosis.',
  'One post claims 250mcg, another says 500mcg, leaving you guessing with your own body.': 'Ein Beitrag behauptet 250mcg, ein anderer sagt 500mcg, was Sie beim Ausprobieren an Ihrem eigenen Körper im Ungewissen lässt.',
  "The research exists, but it's buried across dozens of dense papers you'd need a biochemistry degree to synthesize.": 'Die Forschung existiert, aber sie ist in Dutzenden von dichten Artikeln vergraben, für deren Verständnis man einen Abschluss in Biochemie bräuchte.',
  'Nobody explains exact bacteriostatic water volume vs. insulin syringe IU units.': 'Niemand erklärt das genaue Verhältnis zwischen dem Volumen von bakteriostatischem Wasser und den IE-Einheiten einer Insulinspritze.',
  '5 Complete Modules — 181 pages, 41 peptides, 14 protocols': '5 komplette Module — 181 Seiten, 41 Peptide, 14 Protokolle',
  'Prime Syringe Calculator App (spreadsheet)': 'Prime Spritzenrechner App (Tabelle)',
  'Smart Buyer Vetting Guide (suppliers & COA)': 'Smart Buyer Vetting Guide (Anbieter & COA)',
  'Protocol Tracking System (tracker)': 'Protokoll-Tracking-System (Tracker)',
  'Peptide Master Map — the right peptide for your goal': 'Peptid-Masterplan — das richtige Peptid für Ihr Ziel',
  'Essential Peptide Glossary — 50 terms made simple': 'Wesentliches Peptid-Glossar — 50 Begriffe einfach erklärt'
};

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace dollars
  content = content.replace(/\$(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)/g, (match, p1) => {
      let parts = p1.split('.');
      let integerPart = parts[0].replace(/,/g, '.');
      let decimalPart = parts[1] ? ',' + parts[1] : '';
      return integerPart + decimalPart + ' €';
  });

  // Replace text using dictionary
  for (const [en, de] of Object.entries(dict)) {
    content = content.split(en).join(de);
  }

  fs.writeFileSync(filePath, content);
}

console.log("Translation and price conversion complete!");
