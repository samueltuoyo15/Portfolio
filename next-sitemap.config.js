/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://samuel-tuoyo.vercel.app",
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
      "https://samuel-tuoyo.vercel.app/sitemap.xml",
    ],
  },
  // Explicitly list all pages with their SEO priority
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
  ],
};

export default config;
