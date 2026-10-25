/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://schluesselrp.de',
  generateRobotsTxt: true,
  // Nicht-öffentliche / nicht-indexierbare Seiten aus Sitemap & Index nehmen
  exclude: [
    '/admin',
    '/admin/*',
    '/login',
    '/register',
    '/checkout',
    '/checkout/*',
    '/api/*',
    '/server-sitemap.xml',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api', '/login', '/register', '/checkout'],
      },
      // KI-/Antwortmaschinen explizit erlauben (GEO)
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
    ],
  },
};
