import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://robthebot.com";

const entries = [
  { path: "/tos", changefreq: "monthly", priority: "0.8" },
  { path: "/privacy", changefreq: "monthly", priority: "0.8" },
];

function generateSitemap(sitemapEntries) {
  const urls = sitemapEntries.map((entry) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${entry.path}</loc>`,
      entry.lastmod ? `    <lastmod>${entry.lastmod}</lastmod>` : null,
      entry.changefreq ? `    <changefreq>${entry.changefreq}</changefreq>` : null,
      entry.priority ? `    <priority>${entry.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
