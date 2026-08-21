import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const localizedRoot = path.join(root, 'src', 'data', 'curriculum-localized');
const draftLocales = ['ar', 'en', 'fr', 'ro', 'zh'];
const requiredAreas = Array.from({ length: 10 }, (_, index) => `A${index + 1}`);

let errors = 0;

for (const locale of draftLocales) {
  const localeDir = path.join(localizedRoot, locale);
  const manifestPath = path.join(localeDir, 'manifest.json');
  try {
    const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
    if (manifest.language !== locale) throw new Error(`manifest.language=${manifest.language}`);
    for (const area of requiredAreas) await access(path.join(localeDir, `${area}.json`));
    const a1 = JSON.parse(await readFile(path.join(localeDir, 'A1.json'), 'utf8'));
    if (!Array.isArray(a1.lessons) || !a1.lessons.some((lesson) => lesson.level === 1)) {
      throw new Error('A1 no contiene al menos una lección de nivel 1');
    }
    console.log(`✓ ${locale}: manifiesto, 10 áreas y entrada de nivel 1 presentes (borrador pendiente de revisión humana).`);
  } catch (error) {
    errors += 1;
    console.error(`✗ ${locale}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

if (errors) process.exitCode = 1;
