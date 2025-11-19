/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://schluesselrp.de',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [
      'https://schluesselrp.de/sitemap.xml',
    ],
  },
};
