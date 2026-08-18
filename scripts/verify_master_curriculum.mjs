import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('src/data/curriculum-master-es');
const expectedAreas = ['A1','A2','A3','A4','A5','A6','A7','A8','A9','A10'];
const expectedLanguages = ['es','ca','pt-BR','pt','en','zh','hi','qu','ar','fr','de','it','ru','uk','pl','ro','bg','nl','sv','da','fi','no','el','tr','ur','fa','bn','pa','ta','te','mr','gu','sw','am','ber','tl','vi','ja','ko'];
const failures = [];
const all = [];
for (const area of expectedAreas) {
  const file = path.join(root, `${area}.json`);
  if (!fs.existsSync(file)) { failures.push(`${area}: missing file`); continue; }
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (data.language !== 'es') failures.push(`${area}: canonical language is not es`);
  if (!Array.isArray(data.lessons) || data.lessons.length !== 100) failures.push(`${area}: expected 100 lessons`);
  const ids = new Set();
  for (const lesson of data.lessons ?? []) {
    if (ids.has(lesson.id)) failures.push(`${area}: duplicate ${lesson.id}`);
    ids.add(lesson.id); all.push(lesson);
    for (const field of ['title','objective','explanation','guidedPractice','independentPractice','evidenceOfLearning','accessibility','safetyNote','sourceRequirement']) {
      if (typeof lesson[field] !== 'string' || lesson[field].trim().length < 20) failures.push(`${lesson.id}: weak ${field}`);
    }
    if (!Array.isArray(lesson.steps) || lesson.steps.length < 4) failures.push(`${lesson.id}: fewer than 4 steps`);
  }
}
const allIds = new Set(all.map((lesson) => lesson.id));
if (all.length !== 1000) failures.push(`total lessons: expected 1000, got ${all.length}`);
if (allIds.size !== all.length) failures.push('global duplicate lesson IDs');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.json'), 'utf8'));
if (manifest.lessons !== 1000) failures.push('manifest does not report 1000 lessons');
if (manifest.status !== 'machine-generated-pending-human-review') failures.push('manifest status must disclose editorial review pending');
if (expectedLanguages.length !== 39) failures.push('expected language list is not 39');
const status = Object.fromEntries(expectedLanguages.map((language) => [language, language === 'es' ? 'master-available' : 'translation-pending-human-review']));
fs.writeFileSync(path.resolve('src/data/curriculum-language-status.json'), JSON.stringify({ languages: expectedLanguages, status, note: 'No se presentan traducciones como terminadas sin revisión lingüística y comunitaria.' }, null, 2) + '\n');
if (failures.length) { console.error(failures.join('\n')); process.exit(1); }
console.log(JSON.stringify({ areas: expectedAreas.length, lessons: all.length, languages: expectedLanguages.length, status: manifest.status }));
