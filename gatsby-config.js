module.exports = {
  siteMetadata: {
    title: `サイト名ほげほげ`,
    description: `サイトの説明文をここに入れる`,
    author: `@tawaji`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: '285d1395-78f3-4abb-aa80-25747419df5e',
        serviceId: 'kawaraban',
        apis: [{
          endpoint: 'articles',
        }],
      },
    },
  ],
}
