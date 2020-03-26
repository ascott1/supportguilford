module.exports = {
  siteMetadata: {
    title: `Support Guilford Small Business`,
    description: `During the COVID-19 pandemic, Guilford businesses and business owners are working to adapt to our community's needs. Let's join together to support the local business community. 🙌`,
    author: `@adamdscott`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `support-guilford-business`,
        short_name: `supportguilford`,
        start_url: `/`,
        background_color: `#48c774`,
        theme_color: `#48c774`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
