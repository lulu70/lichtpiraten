/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Site Name`,
    description: `Site Description`,
    author: `@liorcohen`,
    siteUrl: `https://www.SITE_URL.com`,
    image: "/image-name.jpg",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: "static",
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-advanced-sitemap`,
    // {
    //   resolve: `gatsby-plugin-canonical-urls`,
    //   options: {
    //     siteUrl: ``,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-create-client-paths`,
    //   // options: { prefixes: [`/products/*`, `/account/*`] },
    // },
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
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `site-name`,
    //     short_name: `site`,
    //     start_url: `/`,
    //     background_color: `#FFFFFF`,
    //     theme_color: `#FFFFFF`,
    //     display: `minimal-ui`,
    //     // icon: ``, // This path is relative to the root of the site.
    //   },
    // },
  ],
}
