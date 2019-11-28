module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hao Ngo`,
        short_name: `Hao Ngo`,
        start_url: `/`,
        icon: `src/images/favicon.png`, 
        lang: `en`,
        display: `standalone`,
        crossOrigin: `use-credentials`
      }
    },
    `gatsby-plugin-offline`,
  ],
}
