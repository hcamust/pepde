import fs from 'fs';
import path from 'path';

const dir = 'src/components/sections';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const dict = {
  // PeptideCalculator
  'Interactive Live Feature Tool': 'Interaktives Live-Feature-Tool',
  'Test the interactive calculator included in the system. Convert any peptide vial &amp; water volume into exact syringe IU marks in real time.': 'Testen Sie den integrierten interaktiven Rechner. Wandeln Sie jedes Peptidfläschchen & Wasservolumen in Echtzeit in exakte Spritzen-IE-Markierungen um.',
  'Test the interactive calculator included in the system. Convert any peptide vial & water volume into exact syringe IU marks in real time.': 'Testen Sie den integrierten interaktiven Rechner. Wandeln Sie jedes Peptidfläschchen & Wasservolumen in Echtzeit in exakte Spritzen-IE-Markierungen um.',
  '1. Peptide Vial Quantity (mg):': '1. Peptid-Fläschchen-Menge (mg):',
  '2. Bacteriostatic Water Added (mL):': '2. Hinzugefügtes BAC-Wasser (mL):',
  '3. Desired Single Dose (mcg):': '3. Gewünschte Einzeldosis (mcg):',
  '4. Insulin Syringe Type:': '4. Insulinspritzentyp:',
  'U-100 (100 Units / 1 mL)': 'U-100 (100 Einheiten / 1 mL)',
  'U-50 (50 Units / 0.5 mL)': 'U-50 (50 Einheiten / 0.5 mL)',
  'Live Calculation Result': 'Live-Berechnungsergebnis',
  'Pull Syringe Plunger To:': 'Spritzenkolben ziehen bis:',
  'units on your U-': 'Einheiten auf Ihrer U-',
  'insulin syringe': 'Insulinspritze',
  ' IU Target': ' IE Ziel',
  'Concentration per mL:': 'Konzentration pro mL:',
  'Dose per 1 IU Unit:': 'Dosis pro 1 IE Einheit:',
  'Doses per Vial:': 'Dosen pro Fläschchen:',
  'full doses': 'volle Dosen',
  'The full system includes this calculator formatted as an offline Excel file + interactive web app.': 'Das vollständige System enthält diesen Rechner als Offline-Excel-Datei + interaktive Web-App.',

  // Modules
  'Alles, was das structured logically so you never need to search forums or guess doses again.': 'Alles ist logisch strukturiert, sodass Sie nie wieder in Foren suchen oder Dosierungen erraten müssen.',
  'Understand peptide biochemistry, half-life mechanics, reconstituting with BAC water, sterile injection protocols, and preventing degradation.': 'Verstehen Sie Peptid-Biochemie, Halbwertszeitmechanismen, die Rekonstitution mit BAC-Wasser, sterile Injektionsprotokolle und die Vermeidung von Qualitätsverlusten.',
  'Foundations & Reconstitution': 'Grundlagen & Rekonstitution',
  'Body Recomposition & Fat Loss': 'Körperrekomposition & Fettabbau',
  'GLP-1/GIP receptor agonists, growth hormone secretagogues, visceral fat reduction, lipolysis targeting, and preserving lean muscle mass.': 'GLP-1/GIP-Rezeptor-Agonisten, Wachstumshormon-Sekretagoga, Reduzierung von viszeralem Fett, gezielte Lipolyse und Erhalt fettfreier Muskelmasse.',
  'Cellular Shielding & Tissue Repair': 'Zellulärer Schutz & Gewebereparatur',
  'Accelerating tendon, ligament, gut lining, and joint recovery using angiogenic and systemic anti-inflammatory peptide pathways.': 'Beschleunigung der Genesung von Sehnen, Bändern, Darmschleimhaut und Gelenken durch angiogene und systemische entzündungshemmende Peptidpfade.',
  'Nootropics, Mind & Longevity': 'Nootropika, Geist & Langlebigkeit',
  'Neurogenesis, brain-derived neurotrophic factor (BDNF), mitochondrial optimization, telomere extension, and anxiety modulation.': 'Neurogenese, Brain-Derived Neurotrophic Factor (BDNF), mitochondriale Optimierung, Telomerverlängerung und Angstmodulation.',
  'The Protocol Room (14 Ready Plans)': 'Der Protokollraum (14 fertige Pläne)',
  'Step-by-step stack schedules specifying exact weekly schedules, titration steps, synergy pairings, and cycling timelines.': 'Schritt-für-Schritt-Stack-Pläne mit genauen wöchentlichen Zeitplänen, Titrationsschritten, Synergie-Kombinationen und Zyklus-Zeitplänen.',
  'Module {m.num}': 'Modul {m.num}',
  "Module '": "Modul '",
  '>Module ': '>Modul ',
  'Verified Reference': 'Verifizierte Referenz',
  'Each peptide includes mechanism of action, reconstitution formula, subcutaneous vs. intramuscular administration notes, and potential side effects.': 'Jedes Peptid enthält den Wirkmechanismus, die Rekonstitutionsformel, Hinweise zur subkutanen vs. intramuskulären Verabreichung sowie mögliche Nebenwirkungen.',
  '+ 20 More Mapped Peptides': '+ 20 weitere katalogisierte Peptide',

  // Categories in Modules
  "cat: 'Fat Loss'": "cat: 'Fettabbau'",
  "cat: 'Recovery'": "cat: 'Erholung'",
  "cat: 'Skin & Repair'": "cat: 'Haut & Reparatur'",
  "cat: 'Muscle'": "cat: 'Muskeln'",
  "cat: 'Nootropic'": "cat: 'Nootropika'",
  "cat: 'Longevity'": "cat: 'Langlebigkeit'",
  "cat: 'Libido'": "cat: 'Libido'",
  "cat: 'Skin'": "cat: 'Haut'"
};

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace text using dictionary
  for (const [en, de] of Object.entries(dict)) {
    content = content.split(en).join(de);
  }

  fs.writeFileSync(filePath, content);
}

console.log("Third pass translations complete!");
