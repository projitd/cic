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
      //Second Menu Item
    {
      items: [{ text: 'Why Cloud', link: '/whycloud/overview' }],
    },
      //Third Menu Item    
    {
      items: [{ text: 'Cloud Planning', link: '/cloudplanning/overview' }],
    },
      // Forth Menu Item    
      {
        items: [{ text: 'Find Cloud Solutions', link: '/findcloud/overview' }],
      },
      // Fifth Menu Item
      {
        items: [{ text: 'Cloud Acquisition Guidance', link: '/acquisitionguidance/overview' }],
      },
      // Sixth Menu Item
      {
        items: [{ text: 'Cloud Policy', link: '/policy' }],
      },      
      // Seventh Menu Item
      {
        title: 'Cloud Partner Sites',
        items: [
          { text: 'Federal Cloud Computing Strategy', link: 'https://cloud.cio.gov/' },
          { text: 'FedRAMP Authorized Providers', link: '/partnersites' },
          { text: 'DEOS', link: '/deos' },
          { text: 'TechFAR Hub', link: 'https://techfarhub.cio.gov/' },
        ],
      },
      // Eigth Menu Item
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
