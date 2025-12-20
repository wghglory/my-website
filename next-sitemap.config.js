const siteUrl = 'https://derekw.vercel.app';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{userAgent: '*', allow: '/'}],
  },
};
