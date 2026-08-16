import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const downloadsRoot = path.join(process.env.USERPROFILE ?? 'C:\\Users\\USER', 'Downloads');

async function walkZipFiles(rootFolder) {
  const results = [];
  const stack = [rootFolder];

  while (stack.length > 0) {
    const folder = stack.pop();
    if (!folder) continue;

    let entries;
    try {
      entries = await fs.readdir(folder, { withFileTypes: true });
    } catch {
      continue;
    }

    for (const entry of entries) {
      const fullPath = path.join(folder, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
        continue;
      }

      if (!entry.isFile() || !entry.name.toLowerCase().endsWith('.zip')) continue;

      const stat = await fs.stat(fullPath);
      results.push({
        name: entry.name,
        location: fullPath,
        folder: path.dirname(fullPath),
        sizeBytes: stat.size,
      });
    }
  }

  return results;
}

function formatTsString(value) {
  return JSON.stringify(value);
}

function formatBytes(bytes) {
  const units = ['B', 'KB', 'MB', 'GB'];
  let value = bytes;
  let unitIndex = 0;
  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }
  const rounded = unitIndex === 0 ? Math.round(value) : Number(value.toFixed(value >= 100 ? 0 : value >= 10 ? 1 : 2));
  return `${rounded} ${units[unitIndex]}`;
}

const zipFiles = await walkZipFiles(downloadsRoot);
const grouped = new Map();

for (const item of zipFiles) {
  const key = item.folder;
  if (!grouped.has(key)) grouped.set(key, []);
  grouped.get(key).push(item);
}

const collections = Array.from(grouped.entries())
  .map(([folder, items]) => {
    const sortedItems = items
      .sort((a, b) => a.name.localeCompare(b.name, 'es', { numeric: true }))
      .map((item) => ({
        ...item,
        prettySize: formatBytes(item.sizeBytes),
      }));
    const totalBytes = sortedItems.reduce((sum, item) => sum + item.sizeBytes, 0);
    const relative = path.relative(downloadsRoot, folder) || '.';
    const title = relative === '.' ? 'Downloads raiz' : relative.replace(/\\/g, '/');

    return {
      id: relative === '.' ? 'downloads-root' : relative.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      title,
      folder,
      count: sortedItems.length,
      totalBytes,
      items: sortedItems,
    };
  })
  .sort((a, b) => b.count - a.count || a.title.localeCompare(b.title, 'es', { numeric: true }));

const totalCount = zipFiles.length;
const totalBytes = zipFiles.reduce((sum, item) => sum + item.sizeBytes, 0);

const tsLines = [
  'export interface DownloadZipItem {',
  '  name: string;',
  '  location: string;',
  '  folder: string;',
  '  sizeBytes: number;',
  '  prettySize: string;',
  '}',
  '',
  'export interface DownloadZipCollection {',
  '  id: string;',
  '  title: string;',
  '  folder: string;',
  '  count: number;',
  '  totalBytes: number;',
  '  items: DownloadZipItem[];',
  '}',
  '',
  'export const DOWNLOADS_ZIP_COLLECTIONS: DownloadZipCollection[] = [',
];

for (const collection of collections) {
  tsLines.push('  {');
  tsLines.push(`    id: ${formatTsString(collection.id)},`);
  tsLines.push(`    title: ${formatTsString(collection.title)},`);
  tsLines.push(`    folder: ${formatTsString(collection.folder)},`);
  tsLines.push(`    count: ${collection.count},`);
  tsLines.push(`    totalBytes: ${collection.totalBytes},`);
  tsLines.push('    items: [');
  for (const item of collection.items) {
    tsLines.push('      {');
    tsLines.push(`        name: ${formatTsString(item.name)},`);
    tsLines.push(`        location: ${formatTsString(item.location)},`);
    tsLines.push(`        folder: ${formatTsString(item.folder)},`);
    tsLines.push(`        sizeBytes: ${item.sizeBytes},`);
    tsLines.push(`        prettySize: ${formatTsString(item.prettySize)},`);
    tsLines.push('      },');
  }
  tsLines.push('    ],');
  tsLines.push('  },');
}

tsLines.push('];');
tsLines.push('');
tsLines.push(`export const DOWNLOADS_ZIP_TOTAL = ${totalCount};`);
tsLines.push(`export const DOWNLOADS_ZIP_TOTAL_BYTES = ${totalBytes};`);
tsLines.push('');
tsLines.push('export function getDownloadsZipStats() {');
tsLines.push('  return {');
tsLines.push('    collections: DOWNLOADS_ZIP_COLLECTIONS.length,');
tsLines.push('    totalFiles: DOWNLOADS_ZIP_TOTAL,');
tsLines.push('    totalBytes: DOWNLOADS_ZIP_TOTAL_BYTES,');
tsLines.push('  };');
tsLines.push('}');

await fs.writeFile(path.join(repoRoot, 'src/data/downloads-zip-index.ts'), `${tsLines.join('\n')}\n`, 'utf8');

const mdLines = [
  '# ZIP Index',
  '',
  `Snapshot generado desde \`${downloadsRoot}\`.`,
  '',
  `- Colecciones: ${collections.length}`,
  `- ZIPs totales: ${totalCount}`,
  `- Tamaño total: ${formatBytes(totalBytes)}`,
  '',
];

for (const collection of collections) {
  mdLines.push(`## ${collection.title}`);
  mdLines.push('');
  mdLines.push(`- Carpeta: \`${collection.folder}\``);
  mdLines.push(`- ZIPs: ${collection.count}`);
  mdLines.push(`- Tamaño total: ${formatBytes(collection.totalBytes)}`);
  mdLines.push('');
  for (const item of collection.items) {
    mdLines.push(`- ${item.name} (${item.prettySize})`);
  }
  mdLines.push('');
}

await fs.writeFile(path.join(repoRoot, 'docs/from-downloads/zip-index.md'), `${mdLines.join('\n')}\n`, 'utf8');
