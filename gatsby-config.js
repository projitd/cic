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
      title: 'Basics',
      items: [
        { text: 'Cloud Basics', link: '/basics/cloud-basics' },
        { text: 'Cloud Security', link: '/basics/cloud-security' },
        { text: 'Cloud Capabilities', link: '/basics/cloud-capabilities' }
      ],
    },
      //Third Menu Item    
        {
      title: 'Planning',
      items: [
        { text: 'Planning Basics', link: '/planning/planning-basics' },
        { text: 'Business Considerations', link: '/planning/business-considerations' },
        { text: 'Technical Implementation', link: '/planning/technical-implementation' },
      ],
    },
      // Forth Menu Item    
      {
        items: [{ text: 'Solutions', link: '/solutions/overview' }],
      },
      // Fifth Menu Item
      {
        title: 'Acquisitions',
        items: [
          { text: 'Overview', link: '/acquisitions/overview' },
          { text: 'Pricing', link: '/acquisitions/pricing' },
          { text: 'Market Research', link: '/acquisitions/market-research' },
          { text: 'Procurement Process', link: '/acquisitions/procurement-process' },
          { text: 'Acquisition Challenges', link: '/acquisitions/acquisition-challenges' },
          { text: 'Acquisition Resources', link: '/acquisitions/acquisition-resources' },
        ],
      },
      // Sixth Menu Item
      {
        title: 'Resources',
        items: [
          { text: 'Templates', link: '/resources/templates' },
          { text: 'Use Cases', link: '/resources/use-cases' },
          { text: 'Success Stories', link: '/resources/success-stories' },
          { text: 'Helpful Documents', link: '/resources/helpful-documents' },
        ],
      },      
      // Seventh Menu Item
      {
        title: 'References',
        items: [
          { text: 'Policy', link: '/references/policy' },
          { text: 'Partner Sites', link: '/references/partner-sites' },
        ],
      },
      // Eigth Menu Item
      {
        items: [{ text: 'Calendar', link: '/calendar' }],
      },
      //Nineth Menu Item
      {
        title: 'Vendors',
        items: [
          { text: 'Vendors', link: '/vendors/vendorHome' },
          { text: 'Acquisition Vehicles', link: '/vendors/acquisitionVehicles' },
        ]
      },
      //Tenth Menu Item
      {
        title: 'Manufacturers',
        items: [
          { text: 'Manufacturer', link: '/manufacturers/manufacturerHome' },
          { text: 'Offerings', link: '/manufacturers/manufacturerOfferings' },
          { text: 'Vendors', link: '/manufacturers/manufacturerVendors' },
        ]
      }
        // end of Horizontal Navigation
    ],

    // Links above Search Widget in Header
    secondaryLinks: [
      { text: 'Contact Us', link: '/support' },
      { text: 'About CIC', link: '/about' },
      { text: 'Login', link: '/login' },
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
    'gatsby-transformer-csv',

   
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
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


