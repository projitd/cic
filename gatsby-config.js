module.exports = {
  siteMetadata: {
    author: 'GSA',
    title: `Cloud Information Center`,
    description: `Helping Government get on and survive in the cloud`,
    // Start of horizontal Site Menu in Header of every page
    navigation: [
      //First Menu Item
    {
      items: [{ text: 'Home', link: '/' }],
    },
      //Second Menu Item
    {
      title: 'Why Cloud',
      items: [
        { text: 'Cloud Basics', link: '/whycloud/overview' },
        { text: 'Cloud Security', link: '/whycloud/security' },
        { text: 'Cloud Capabilities', link: '/whycloud/technicalcapabilities' },
      ],
    },
      //Third Menu Item    
        {
      title: 'Plan Cloud',
      items: [
        { text: 'Planning Basics', link: '/cloudplanning/overview' },
        { text: 'Business Considerations', link: '/cloudplanning/business' },
        { text: 'Technical Implementation', link: '/cloudplanning/technical' },
      ],
    },
      // Forth Menu Item    
      {
        items: [{ text: 'Find Cloud', link: '/findcloud/overview' }],
      },
      // Fifth Menu Item
      {
        title: 'Acquire Cloud',
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
        items: [{ text: 'Events & Training', link: '/eventstraining' }],
      },
        // end of Horizontal Navigation
    ],

    // Links above Search Widget in Header
    secondaryLinks: [
      { text: 'Contact Us', link: '/support' },
      { text: 'CloudSmart', link: '/cloudsmart' },
    ],

    // Search.gov configuration
    //
    // 1. Create an account with Search.gov https://search.usa.gov/signup
    // 2. Add a new site.
    // 3. Add your site/affiliate name here.
    searchgov: {
      endpoint: 'https://search.usa.gov', // You should not change this.
      affiliate: 'gsa-cic', // replace this with your search.gov account
      access_key: 'LINTBPOt4q19dOeG9eA7UHi4TRQIujq2GXf6kwcwTyE=', // This is placeholder. Not private.
      inline: false, // this renders the results on the same domain. Otherwise, it will render the results in the search.gov domain
    },
    dapAgency: 'GSA',
  },
  pathPrefix: process.env.BASEURL || '/',
  
  
  // Plugins

  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    'gatsby-remark-responsive-iframe',
    'gatsby-transformer-remark',
    'gatsby-remark-images',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',

   
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


