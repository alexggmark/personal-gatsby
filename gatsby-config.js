/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config()

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATOCMS_TOKEN,
        preview: false,
        disableLiveReload: false,
      },
    }
  ],
}
