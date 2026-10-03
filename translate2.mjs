import fs from 'fs';
import path from 'path';

const dir = 'src/components/sections';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const dict = {
  'Live Peptide Syringe Calculator': 'Live-Peptid-Spritzenrechner',
  'Comprehensive Curriculum': 'Umfassender Lehrplan',
  'Inside The 5 Modules &amp; 181 Technical Pages': 'In den 5 Modulen &amp; 181 technischen Seiten',
  'Inside The 5 Modules & 181 Technical Pages': 'In den 5 Modulen & 181 technischen Seiten',
  'Full Spectrum Mapping': 'Umfassende Katalogisierung',
  '41 Peptides Fully Cataloged (Dose, Route, Half-Life &amp; Stacks)': '41 Peptide vollständig katalogisiert (Dosis, Weg, Halbwertszeit &amp; Stacks)',
  '41 Peptides Fully Cataloged (Dose, Route, Half-Life & Stacks)': '41 Peptide vollständig katalogisiert (Dosis, Weg, Halbwertszeit & Stacks)',
  'Finally a guide that cites actual PubMed papers': 'Endlich ein Leitfaden, der echte PubMed-Artikel zitiert',
  'I was skeptical because most online peptide info is recycled forum bro-science. Peptinova actually cites the author and year for every protocol. The syringe calculator alone saved me hours of explaining reconstitution to patients.': 'Ich war skeptisch, weil die meisten Peptid-Infos im Internet recycelte Foren-Pseudowissenschaft sind. Peptinova zitiert tatsächlich den Autor und das Jahr für jedes Protokoll. Allein der Spritzenrechner hat mir stundenlanges Erklären der Rekonstitution bei Patienten erspart.',
  'No more guessing IU units on my U-100 syringe': 'Kein Rätselraten mehr über IE-Einheiten auf meiner U-100-Spritze',
  'I ruined a 5mg vial of BPC-157 last year because I added too much BAC water and got confused by the dosage conversion. This system gave me the exact syringe IU mark for my specific dose. Absolute lifesaver.': 'Ich habe letztes Jahr eine 5-mg-Durchstechflasche BPC-157 ruiniert, weil ich zu viel BAC-Wasser hinzugefügt habe und bei der Dosierungsumrechnung verwirrt war. Dieses System gab mir die genaue IU-Markierung auf der Spritze für meine spezifische Dosis. Ein absoluter Lebensretter.',
  'The 14 ready protocols saved me hundreds of dollars': 'Die 14 fertigen Protokolle haben mir Hunderte von Euro gespart',
  'Having ready-to-apply protocols for mitochondrial health and fat loss made starting so straightforward. I went straight to Module 4, picked my stack, and started the same day.': 'Die sofort anwendbaren Protokolle für die mitochondriale Gesundheit und den Fettabbau machten den Einstieg so einfach. Ich ging direkt zu Modul 4, wählte meinen Stack und begann noch am selben Tag.',
  'Trusted by 1,420+ Health Practitioners &amp; Biohackers': 'Vertraut von über 1.420 Gesundheitsexperten &amp; Biohackern',
  'Trusted by 1,420+ Health Practitioners & Biohackers': 'Vertraut von über 1.420 Gesundheitsexperten & Biohackern',
  'Real feedback from verified users who eliminated guesswork with Peptinova.': 'Echtes Feedback von verifizierten Benutzern, die dank Peptinova kein Rätselraten mehr haben.',
  'Based on 1,420 verified user ratings': 'Basierend auf 1.420 verifizierten Benutzerbewertungen',
  'Verified Buyer': 'Verifizierter Käufer',
  'Sports Physician & Biohacker': 'Sportarzt & Biohacker',
  'Fitness Coach & Competitor': 'Fitness-Coach & Wettkämpferin',
  'Software Engineer & Longevity Enthusiast': 'Software-Ingenieur & Langlebigkeits-Enthusiast',
  '2 weeks ago': 'vor 2 Wochen',
  '1 month ago': 'vor 1 Monat',
  '3 weeks ago': 'vor 3 Wochen',
  '5 Stars': '5 Sterne',
  '4 Stars': '4 Sterne',
  '3 Stars': '3 Sterne'
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

console.log("Additional translations complete!");
