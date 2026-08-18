import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = process.cwd();
const requiredFiles = [
  'src/data/curriculum-master-es/manifest.json',
  'src/data/sovereign/manifest.json',
  'public/offline/asset-manifest.json',
  'src/lib/offline-tutor.ts',
];

const readJson = (relativePath) => JSON.parse(fs.readFileSync(path.join(root, relativePath), 'utf8'));
const fail = (message) => {
  console.error(`SOVEREIGN_FAIL: ${message}`);
  process.exitCode = 1;
};

for (const relativePath of requiredFiles) {
  if (!fs.existsSync(path.join(root, relativePath))) fail(`missing ${relativePath}`);
}

if (process.exitCode) process.exit();

const curriculumManifest = readJson('src/data/curriculum-master-es/manifest.json');
const sovereignManifest = readJson('src/data/sovereign/manifest.json');
const assetManifest = readJson('public/offline/asset-manifest.json');
const lessonFiles = curriculumManifest.areas.map((area) => `src/data/curriculum-master-es/${area}.json`);
const lessonCount = lessonFiles.reduce((total, relativePath) => {
  const area = readJson(relativePath);
  if (!Array.isArray(area.lessons)) fail(`${relativePath} has no lessons array`);
  return total + (Array.isArray(area.lessons) ? area.lessons.length : 0);
}, 0);

if (curriculumManifest.lessons !== 1000) fail(`manifest lesson count is ${curriculumManifest.lessons}, expected 1000`);
if (lessonCount !== curriculumManifest.lessons) fail(`lesson files contain ${lessonCount}, manifest declares ${curriculumManifest.lessons}`);
if (sovereignManifest.mode !== 'offline-first') fail('sovereign manifest is not offline-first');
if (!assetManifest.files.length) fail('asset manifest is empty');

let verifiedAssets = 0;
for (const asset of assetManifest.files) {
  const absolutePath = path.join(root, asset.path);
  if (!fs.existsSync(absolutePath)) {
    fail(`asset missing: ${asset.path}`);
    continue;
  }
  const digest = crypto.createHash('sha256').update(fs.readFileSync(absolutePath)).digest('hex');
  if (digest !== asset.sha256) fail(`asset checksum mismatch: ${asset.path}`);
  else verifiedAssets += 1;
}

const report = {
  package: 'Manos Abiertas — Base Soberana Local',
  checkedAt: new Date().toISOString(),
  status: process.exitCode ? 'FAIL' : 'PASS',
  curriculum: { language: 'es', areas: curriculumManifest.areas.length, lessons: lessonCount },
  assets: { declared: assetManifest.files.length, verified: verifiedAssets },
  remoteServices: 'optional-only',
  videos: 'excluded-from-base',
};
fs.writeFileSync(path.join(root, 'public/offline/sovereign-health.json'), `${JSON.stringify(report, null, 2)}\n`);
if (!process.exitCode) console.log(`SOVEREIGN_PASS: ${lessonCount} lessons and ${verifiedAssets} local assets verified`);
