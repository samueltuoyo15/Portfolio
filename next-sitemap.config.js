/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://samueltuoyo.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 1.0,
  sitemapSize: 7000,
  exclude: [],
  robotsTxtOptions: {
    policies: [
      { 
        userAgent: "*", 
        allow: "/",
        disallow: [] 
      },
    ],
    additionalSitemaps: [
      "https://samueltuoyo.com/sitemap.xml",
    ],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "weekly",
      priority: 1.0,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    };
  },
};

export default config;
