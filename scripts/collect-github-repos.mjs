import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outputDir = join(root, 'docs', 'world-class');
const outputPath = join(outputDir, 'github-repositories-200.json');
const inspectedAt = new Date().toISOString();

const searches = [
  ['accessibility', 'topic:accessibility stars:>100 archived:false'],
  ['internationalization', 'topic:internationalization stars:>100 archived:false'],
  ['maps-geocoding', 'topic:openstreetmap stars:>100 archived:false'],
  ['pwa-offline', 'topic:pwa stars:>100 archived:false'],
  ['education-lms', 'topic:lms stars:>100 archived:false'],
  ['humanitarian-civic', '(refugee OR humanitarian OR civic-tech) stars:>50 archived:false'],
  ['security-privacy', 'topic:web-security stars:>100 archived:false'],
  ['testing-observability', 'topic:testing stars:>500 archived:false'],
  ['nextjs-react', 'topic:nextjs stars:>1000 archived:false'],
  ['open-data-etl', 'topic:open-data stars:>100 archived:false'],
];

const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

function risk(repo) {
  const lastPush = Date.parse(repo.pushed_at);
  const stale = Number.isFinite(lastPush) && Date.now() - lastPush > 730 * 24 * 60 * 60 * 1000;
  if (!repo.license?.spdx_id || repo.license.spdx_id === 'NOASSERTION') return 'review-license';
  if (stale) return 'review-maintenance';
  return 'normal-review';
}

function normalize(repo, category) {
  return {
    id: repo.id,
    category,
    fullName: repo.full_name,
    url: repo.html_url,
    description: repo.description ?? '',
    owner: repo.owner.login,
    primaryLanguage: repo.language,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    openIssues: repo.open_issues_count,
    license: repo.license?.spdx_id ?? null,
    defaultBranch: repo.default_branch,
    pushedAt: repo.pushed_at,
    topics: repo.topics ?? [],
    adoptionRisk: risk(repo),
    source: 'GitHub Search API',
    inspectedAt,
  };
}

async function search(category, query) {
  const headers = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'manos-abiertas-research-catalog',
  };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const url = new URL('https://api.github.com/search/repositories');
  url.searchParams.set('q', query);
  url.searchParams.set('sort', 'stars');
  url.searchParams.set('order', 'desc');
  url.searchParams.set('per_page', '35');
  const response = await fetch(url, { headers });
  if (!response.ok) {
    const detail = (await response.text()).slice(0, 300);
    throw new Error(`${category}: GitHub ${response.status}: ${detail}`);
  }
  const payload = await response.json();
  return payload.items.map((repo) => normalize(repo, category));
}

function validate(repositories) {
  const errors = [];
  if (repositories.length !== 200) errors.push(`expected 200 repositories, found ${repositories.length}`);
  if (new Set(repositories.map((repo) => repo.id)).size !== repositories.length) errors.push('duplicate repository IDs');
  if (repositories.some((repo) => repo.adoptionRisk === 'review-license')) {
    // Missing licences stay visible for review; they are never silently treated as reusable code.
  }
  return errors;
}

if (process.argv.includes('--check')) {
  if (!existsSync(outputPath)) {
    console.error(`missing repository catalog: ${outputPath}`);
    process.exit(1);
  }
  const repositories = JSON.parse(readFileSync(outputPath, 'utf8')).repositories;
  const errors = validate(repositories);
  if (errors.length) {
    console.error(errors.join('\n'));
    process.exit(1);
  }
  console.log(`verified ${repositories.length} unique GitHub repositories`);
  process.exit(0);
}

const selected = [];
const seen = new Set();
for (const [category, query] of searches) {
  const candidates = await search(category, query);
  const categoryItems = candidates.filter((repo) => !seen.has(repo.id)).slice(0, 20);
  if (categoryItems.length !== 20) {
    throw new Error(`${category}: only ${categoryItems.length} unique repositories returned`);
  }
  for (const repo of categoryItems) {
    selected.push(repo);
    seen.add(repo.id);
  }
  if (!process.env.GITHUB_TOKEN) await sleep(1500);
}

const errors = validate(selected);
if (errors.length) throw new Error(errors.join('\n'));
mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, `${JSON.stringify({ inspectedAt, count: selected.length, searches: Object.fromEntries(searches), repositories: selected }, null, 2)}\n`);
console.log(`collected ${selected.length} repositories in ${outputPath}`);
