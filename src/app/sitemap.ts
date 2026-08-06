import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://manosabiertas.space-z.ai";

// All public sections of the app. Sections are navigable via hash deep-links
// (#/recursos, #/derechos...) so search engines and users can reach them.
const SECTIONS: { path: string; changefreq: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/#/learn-ai", changefreq: "weekly", priority: 0.9 },
  { path: "/#/cv", changefreq: "weekly", priority: 0.9 },
  { path: "/#/office", changefreq: "weekly", priority: 0.8 },
  { path: "/#/resources", changefreq: "weekly", priority: 0.9 },
  { path: "/#/rights", changefreq: "weekly", priority: 0.9 },
  { path: "/#/tools", changefreq: "weekly", priority: 0.8 },
  { path: "/#/events", changefreq: "daily", priority: 0.7 },
  { path: "/#/courses", changefreq: "weekly", priority: 0.8 },
  { path: "/#/community", changefreq: "weekly", priority: 0.7 },
  { path: "/#/contacts", changefreq: "monthly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return SECTIONS.map((s) => ({
    url: `${SITE_URL}${s.path}`,
    lastModified: new Date(),
    changeFrequency: s.changefreq,
    priority: s.priority,
    alternates: {
      languages: {
        es: `${SITE_URL}/`,
        en: `${SITE_URL}/en`,
        zh: `${SITE_URL}/zh`,
        pt: `${SITE_URL}/pt`,
        fr: `${SITE_URL}/fr`,
      },
    },
  }));
}
