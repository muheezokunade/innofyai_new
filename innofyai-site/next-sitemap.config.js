/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://innofyai.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin/*', '/api/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/products'),
    await config.transform(config, '/services'),
    await config.transform(config, '/pricing'),
    await config.transform(config, '/about'),
    await config.transform(config, '/contact'),
    await config.transform(config, '/blog'),
    await config.transform(config, '/privacy'),
    await config.transform(config, '/terms'),
    await config.transform(config, '/products/ai-receptionist'),
    await config.transform(config, '/products/lead-scorer'),
    await config.transform(config, '/products/adaptive-follow-up'),
    await config.transform(config, '/services/automation-cx'),
    await config.transform(config, '/services/brand-marketing'),
    await config.transform(config, '/services/web-development'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    additionalSitemaps: [
      'https://innofyai.com/sitemap.xml',
    ],
  },
}
