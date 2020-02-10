module.exports = {
  siteMetadata: {
    author: 'GSA',
    title: `GSA's Cloud Information Center`,
    description: `Helping Government get on and survive in the cloud`,
    // Start of horizontal Site Menu in Header of every page
    navigation: [
    //First Menu Item
      {
        items: [{ text: 'Home', link: '/' }],
      },
      {
    //Second Menu Item
        title: 'Why Cloud',
        items: [
          { text: 'Basics', link: '/whycloud/overview' },
          { text: 'Security Compliance', link: '/whycloud/security' },
          { text: 'Technical Capabilities', link: '/whycloud/technicalcapabilities' },
        ],
      },
      //Third Menu Item
      {
        title: 'Cloud Planning',
        items: [
          { text: 'Overview', link: '/cloudplanning/Overview' },
          { text: 'Business Considerations', link:  '/cloudplanning/business' },
          { text: 'Technical Implementation', link: '/cloudplanning/technical' },
        ],
      },
      // Forth Menu Item
      {
        title: 'Find Cloud Solutions',
        items: [
          { text: 'Overview', link: '/findcloud/overview' },
          { text: 'IaaS', link: '/findcloud/iaas' },
          { text: 'PaaS', link: '/findcloud/paas' },
          { text: 'SaaS', link: '/findcloud/saas' },
          { text: 'Cloud Professional Services', link: '/findcloud/professionalservices' },
          { text: 'FedRAMP Compliant Vendors', link: '/findcloud/vendors' },
        ],
      },
      // Fifth Menu Item
      {
        title: 'Cloud Acquisition Guidance',
        items: [
          { text: 'Overview', link: '/acquisitionguidance/overview' },
          { text: 'Pricing', link: '/acquisitionguidance/pricing' },
          { text: 'Market Research', link: '/acquisitionguidance/marketresearch' },
          { text: 'Procurement Process', link: '/acquisitionguidance/procurementprocess' },
          { text: 'Acquisition Challenges', link: '/acquisitionguidance/acquisitionchallenges' },
          { text: 'Acquisition Resources', link: '/acquisitionguidance/acquisitionresources' },
          { text: 'Templates', link: '/acquisitionguidance/templates' },
          { text: 'Use Cases', link: '/acquisitionguidance/usecases' },
          { text: 'Helpful Documents', link: '/acquisitionguidance/helpfuldocuments' },
        ],
      },
      // Sixth Menu Item
      {
        items: [{ text: 'Policy', link: '/policy' }],
      },
      // Seventh Menu Item
      {
        items: [{ text: 'Partner Sites', link: '/partnersites' }],
      },
      // Eigth Menu Item
      {
        items: [{ text: 'DEOS', link: '/deos' }],
      },
      // Nineth Menu Item
      {
        items: [{ text: 'Events & Training', link: '/eventstraining' }],
      },
        // end of Horizontal Navigation
    ],

    // Links above Search Widget in Header
    secondaryLinks: [
      { text: 'Support', link: '/support' },
      { text: 'CloudSmart', link: '/cloudsmart' },
    ],

    // Search.gov configuration
    //
    // 1. Create an account with Search.gov https://search.usa.gov/signup
    // 2. Add a new site.
    // 3. Add your site/affiliate name here.
    searchgov: {
      endpoint: 'https://search.usa.gov', // You should not change this.
      affiliate: 'federalist-uswds-example', // replace this with your search.gov account
      access_key: 'xX1gtb2RcnLbIYkHAcB6IaTRr4ZfN-p16ofcyUebeko=', // This is placeholder. Not private.
      inline: true, // this renders the results on the same domain. Otherwise, it will render the results in the search.gov domain
    },
    dapAgency: 'GSA',
  },
  pathPrefix: process.env.BASEURL || '/',
  
  
  // Plugins

  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/md-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/src/files`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `events`,
        path: `${__dirname}/src/events`,
      },
    },

//  need to install plugin to site first
//     npm i gatsby-remark-embed-video
//
//plugins: [
//  {
//    resolve: "gatsby-transformer-remark",
//    options: {
//      plugins: [
//      {
//        resolve: "gatsby-remark-embed-video",
//        options: {
//          width: 800,
//          ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
//          height: 400, // Optional: Overrides optional.ratio
//          related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
//          noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
//          urlOverrides: [
//            {
//              id: 'youtube',
//              embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
//            }
//          ] //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
//       }
//      }
//      ]
//    }
// },
`gatsby-transformer-remark`,
{
  resolve: `gatsby-plugin-manifest`,
  options: {
    name: `gatsby-starter-default`,
    short_name: `starter`,
    start_url: `/`,
    background_color: `#663399`,
    theme_color: `#663399`,
    display: `minimal-ui`,
    icon: `src/images/federalist-icon.png`, // This path is relative to the root of the site.
  },
},
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
