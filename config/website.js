const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Bryan Eaton - Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Bryan Eaton', // Alternative Site title for SEO
  siteTitleShort: 'Bryan', // short_name for manifest
  siteHeadline: 'Professional Full Stack Web and Mobile Software Engineer', // Headline for schema.org JSONLD
  siteUrl: 'https://www.bryaneaton.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.jpg', // Used for SEO and manifest
  siteDescription:
    'Bryan Eaton is a technical co-founder who does full stack web and mobile software development using Node.js, React, React Native, and anything else to build better products.',
  author: 'Bryan Eaton', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@bryaneaton131', // Twitter Username
  ogSiteName: 'Bryan.P.Eaton', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: '',

  // Manifest and Progress color
  themeColor: tailwind.colors['green-light'],
  backgroundColor: tailwind.colors['blue-dark'],
};
