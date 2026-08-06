import { writeFileSync } from 'fs';
import { resolve } from 'path';

const SITE_URL = 'https://manosabiertas.space-z.ai';
const BUILD_TIME = new Date().toISOString();

const staticRoutes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/en', changefreq: 'weekly', priority: 0.8 },
  { url: '/zh', changefreq: 'weekly', priority: 0.8 },
  { url: '/pt', changefreq: 'weekly', priority: 0.8 },
  { url: '/fr', changefreq: 'weekly', priority: 0.8 },
];

const hashSections = [
  'home',
  'learn-ai',
  'cv',
  'office',
  'resources',
  'rights',
  'tools',
  'events',
  'courses',
  'community',
  'contacts',
];

const generateSitemap = () => {
  const urls = [];

  staticRoutes.forEach((route) => {
    urls.push({
      loc: `${SITE_URL}${route.url}`,
      lastmod: BUILD_TIME,
      changefreq: route.changefreq,
      priority: route.priority,
    });
  });

  hashSections.forEach((section) => {
    urls.push({
      loc: `${SITE_URL}/#/${section}`,
      lastmod: BUILD_TIME,
      changefreq: 'weekly',
      priority: section === 'home' ? 0.9 : 0.7,
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
    <xhtml:link rel="alternate" hreflang="es" href="${u.loc}" />
    <xhtml:link rel="alternate" hreflang="en" href="${u.loc.replace(SITE_URL, SITE_URL + '/en')}" />
    <xhtml:link rel="alternate" hreflang="zh" href="${u.loc.replace(SITE_URL, SITE_URL + '/zh')}" />
    <xhtml:link rel="alternate" hreflang="pt" href="${u.loc.replace(SITE_URL, SITE_URL + '/pt')}" />
    <xhtml:link rel="alternate" hreflang="fr" href="${u.loc.replace(SITE_URL, SITE_URL + '/fr')}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${u.loc}" />
  </url>`
  )
  .join('\n')}
</urlset>`;

  const outputPath = resolve('public/sitemap.xml');
  writeFileSync(outputPath, sitemap);
  console.log(`✅ sitemap.xml generated at ${outputPath} with ${urls.length} URLs`);
};

generateSitemap();