/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://samueltuoyo.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 1.0,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
    additionalSitemaps: [
      "https://samueltuoyo.com/sitemap.xml",
    ],
  },
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
  ],
};

export default config;
