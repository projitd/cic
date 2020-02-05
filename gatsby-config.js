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
          { text: 'Basics', link: '/whycloud' },
          { text: 'Security Compliance', link: '/whycloud/security' },
          { text: 'Technical Capabilities', link: '/whycloud/technicalcapabilities' },
        ],
      },
      //Third Menu Item
      {
        title: 'Cloud Planning',
        items: [
          { text: 'Overview', link: '/Overview' },
          { text: 'Business Considerations', link:  '/coudplanning/business' },
          { text: 'Technical Implementation', link: '/cloudplanning/technical' },
        ],
      },
      // Forth Menu Item
      {
        title: 'Find Cloud Solutions',
        items: [
          { text: 'Overview', link: '/findcloud/overview' },
          { text: 'Business Considerations', link: '/cloudplanningsecurity' },
          { text: 'Technical Implementation', link: '/cloudplanningtechnical' },
        ],
      },
      // Fifth Menu Item
      {
        title: 'Cloud Acquisition Guidance',
        items: [
          { text: 'Overview', link: '/cloudplanning' },
          { text: 'Business Considerations', link: '/cloudplanningsecurity' },
          { text: 'Technical Implementation', link: '/cloudplanningtechnical' },
        ],
      },
      // Sixth Menu Item
      {
        title: 'Cloud Policy Directives',
        items: [
          { text: 'Overview', link: '/cloudplanning' },
          { text: 'Business Considerations', link: '/cloudplanningsecurity' },
          { text: 'Technical Implementation', link: '/cloudplanningtechnical' },
        ],
      },
      // Seventh Menu Item
      {
        items: [{ text: 'Partner Sites', link: '/' }],
      },
      // Eigth Menu Item
      {
        items: [{ text: 'DEOS', link: '/' }],
      },
      // Nineth Menu Item
      {
        items: [{ text: 'Training & Events', link: '/' }],
      },
        // end of Horizontal Navigation
    ],
   
        // Start of Side Navigation - for pages with sidenav: true set
        Sidenav: [
          //First Menu Item
            {
              items: [{ text: 'Home', link: '/' }],
            },
            {
          //Second Menu Item
              title: 'Why Cloud',
              items: [
                { text: 'Basics', link: '/whycloud/whycloud' },
                { text: 'Security Compliance', link: '/whycloud/security' },
                { text: 'Technical Capabilities', link: '/whycloud/technicalcapabilities' },
              ],
            },
            //Third Menu Item
            {
              title: 'Cloud Planning',
              items: [
                { text: 'Overview', link: '/cloudplanning/cloudplanning' },
                { text: 'Business Considerations', link: '/cloudplanning/business' },
                { text: 'Technical Implementation', link: '/cloudplanning/technical' },
              ],
            },
            // Forth Menu Item
            {
              title: 'Find Cloud Solutions',
              items: [
                { text: 'IaaS', link: '/cloudplanning' },
                { text: 'PaaS', link: '/cloudplanningsecurity' },
                { text: 'SaaS', link: '/cloudplanningtechnical' },
                { text: 'Cloud Professional Services', link: '/cloudplanningtechnical' },
                { text: 'Vendors', link: '/cloudplanningtechnical' },
              ],
            },
            // Fifth Menu Item
            {
              title: 'Acquisition Guidance',
              items: [
                { text: 'Pricing', link: '/cloudplanning' },
                { text: 'Market Research', link: '/cloudplanningsecurity' },
                { text: 'Procurement Process', link: '/cloudplanningtechnical' },
                { text: 'Acquisition Challanges', link: '/cloudplanning' },
                { text: 'Acquisition Resources', link: '/cloudplanning' },
                { text: 'Templates', link: '/cloudplanning' },
                { text: 'Use Cases', link: '/cloudplanning' },
                { text: 'Helpful Documents', link: '/cloudplanning' },
              ],
            },
            // Sixth Menu Item
            {
              items: [{ text: 'Policy Directives', link: '/policy' }],
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
                        // Nineth Menu Item
            {
              items: [{ text: 'Events & Training', link: '/eventstraining' }],
            },
            // Tenth Menu Item
            {
              items: [{ text: 'Discussions', link: '/discussions' }],
            },
              // end of Horizontal Navigation
          ],
    

    // Links above Search Widget in Header
    secondaryLinks: [
      { text: 'Support', link: '/contactus' },
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
