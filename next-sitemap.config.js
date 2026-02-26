/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://samuel-tuoyo.is-a.dev",
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
      "https://samuel-tuoyo.is-a.dev/sitemap.xml",
    ],
  },
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
  ],
};

export default config;
