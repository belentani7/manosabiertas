import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const root = process.cwd();
const languagePath = path.join(root, 'src', 'i18n', 'languages.ts');
const translationPath = path.join(root, 'src', 'i18n', 'translations.ts');

function fail(message) {
  throw new Error(message);
}

function loadTypeScriptModule(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const result = ts.transpileModule(source, {
    fileName: filePath,
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
    reportDiagnostics: true,
  });

  const errors = (result.diagnostics ?? []).filter(
    (diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error
  );
  if (errors.length > 0) {
    fail(ts.formatDiagnostics(errors, {
      getCanonicalFileName: (name) => name,
      getCurrentDirectory: () => root,
      getNewLine: () => '\n',
    }));
  }

  const loadedModule = { exports: {} };
  const execute = new Function('module', 'exports', 'require', result.outputText);
  execute(loadedModule, loadedModule.exports, (specifier) => {
    fail(`Unexpected runtime import ${specifier} in ${filePath}`);
  });
  return loadedModule.exports;
}

function getObjectKeysFromSource(filePath, variableName) {
  const source = fs.readFileSync(filePath, 'utf8');
  const sourceFile = ts.createSourceFile(filePath, source, ts.ScriptTarget.Latest, true);
  const keys = [];

  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name) || declaration.name.text !== variableName) continue;
      if (!declaration.initializer || !ts.isObjectLiteralExpression(declaration.initializer)) {
        fail(`${variableName} must be an object literal`);
      }
      for (const property of declaration.initializer.properties) {
        if (ts.isShorthandPropertyAssignment(property)) keys.push(property.name.text);
        if (ts.isPropertyAssignment(property)) {
          if (ts.isStringLiteral(property.name)) keys.push(property.name.text);
          if (ts.isIdentifier(property.name)) keys.push(property.name.text);
        }
      }
    }
  }
  return keys;
}

const languageModule = loadTypeScriptModule(languagePath);
const translationModule = loadTypeScriptModule(translationPath);
const languages = languageModule.LANGUAGES;
const rtlCodes = languageModule.RTL_LANGUAGE_CODES;
const translations = translationModule.translations;
const expectedRtl = ['ar', 'fa', 'ur'];

if (languages.length !== 39) fail(`Expected 39 languages, found ${languages.length}`);

const codes = languages.map((language) => language.code);
const uniqueCodes = new Set(codes);
if (uniqueCodes.size !== codes.length) fail('Language codes must be unique');

const dictionarySourceKeys = getObjectKeysFromSource(translationPath, 'translations');
if (new Set(dictionarySourceKeys).size !== dictionarySourceKeys.length) {
  fail('Dictionary codes must be unique in the translations object');
}

for (const code of dictionarySourceKeys) {
  if (!uniqueCodes.has(code)) fail(`Dictionary ${code} has no declared language`);
}

const normalizedRtl = [...rtlCodes].sort();
if (JSON.stringify(normalizedRtl) !== JSON.stringify(expectedRtl)) {
  fail(`RTL codes must be exactly ${expectedRtl.join(', ')}`);
}

for (const language of languages) {
  const expectedDirection = expectedRtl.includes(language.code) ? 'rtl' : 'ltr';
  if (languageModule.getLanguageDirection(language.code) !== expectedDirection) {
    fail(`Wrong direction for ${language.code}`);
  }
  if (Boolean(language.rtl) !== (expectedDirection === 'rtl')) {
    fail(`Language metadata and RTL registry disagree for ${language.code}`);
  }

  const coverage = translationModule.getTranslationCoverage(language.code);
  const hasDictionary = Object.hasOwn(translations, language.code);
  if (coverage.dictionaryAvailable !== hasDictionary) {
    fail(`Dictionary availability mismatch for ${language.code}`);
  }
  if (coverage.translatedKeyCount < 0 || coverage.translatedKeyCount > coverage.totalKeyCount) {
    fail(`Invalid coverage count for ${language.code}`);
  }
  if (hasDictionary && Object.keys(translations[language.code]).length !== coverage.totalKeyCount) {
    fail(`Dictionary ${language.code} does not expose the complete UI key set through fallback`);
  }
  if (!hasDictionary && (coverage.status !== 'beta' || coverage.fallbackCode !== 'es')) {
    fail(`Missing dictionary ${language.code} must be marked beta with Spanish fallback`);
  }
}

const available = codes.filter((code) => Object.hasOwn(translations, code));
const missing = codes.filter((code) => !Object.hasOwn(translations, code));
const dictionaryCount = new Set(available.map((code) => translations[code])).size;
const complete = codes.filter((code) => translationModule.getTranslationCoverage(code).status === 'complete');
const partial = codes.filter((code) => translationModule.getTranslationCoverage(code).status === 'partial');
const beta = codes.filter((code) => translationModule.getTranslationCoverage(code).status === 'beta');

console.log(`I18N_OK languages=${codes.length} unique=${uniqueCodes.size} dictionaryLocales=${available.length} dictionaries=${dictionaryCount}`);
console.log(`COVERAGE complete=${complete.length} partial=${partial.length} beta=${beta.length}`);
console.log(`DICTIONARIES ${available.join(',')}`);
console.log(`BETA_FALLBACK_ES ${missing.join(',')}`);
console.log(`RTL ${normalizedRtl.join(',')}`);
for (const code of available) {
  const coverage = translationModule.getTranslationCoverage(code);
  console.log(`${code}: ${coverage.status} ${coverage.translatedKeyCount}/${coverage.totalKeyCount} (${coverage.percentage}%)`);
}
