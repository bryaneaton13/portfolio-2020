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
Software Engineer who creates solutions.
A software engineer who creates technical solutions to solve problems.

I am a co-founder for multiple technology solutions startups. My
          responsibilities have included development,
          architecture/infrastructure, maintenance, customer support, and sales.
          I mostly focus on Javascript applications all the way through backend,
          frontend, and mobile. I also support clients in their need for
          high-quality applications that need to be built out quickly. With over
          10 years of experience doing web development, I can bring my expertise
          to you.

          
const projects = [
  {
    title: 'Stitched Story',
    url: 'https://learn.stitchedstory.com',
    bg: 'linear-gradient(to right, #D4145A 0%, #FBB03B 100%)',
    description: 'The easiest way to capture video content from your users.',
  },
  {
    title: 'Church Echo',
    url: 'https://www.churchecho.com',
    bg: 'linear-gradient(to right, #D4145A 0%, #ED1E79 100%)',
    description: `We make connecting with your church easier, even if they can't make it in person that week.`,
  },
  {
    title: 'ZÜM Media',
    url: 'https://www.zummedia.com',
    bg: 'linear-gradient(to right, #3454DA 0%, #3a3b33 100%)',
    description: `A development and production company specializing in premium content for television, film, and digital platforms worldwide.`,
  },
  {
    title: 'HRVids',
    url: 'https://www.hrvids.com',
    bg: 'linear-gradient(to right, #662D8C 0%, #FBB03B 100%)',
    description:
      'Capture videos from your applicants to pre-screen them faster',
  },
];
