// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `RN HACK`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: `${process.env.CONTENTFUL_ACCESSTOKEN}`,
        spaceId: `${process.env.CONTENTFUL_SPACEID}`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-typegen`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        theme_color: '#94a9b1',
        background_color: '#94a9b1',
        display: 'browser',
        scope: '/',
        start_url: '/',
        name: 'RN Hack',
        short_name: 'RN',
        description: 'RN Hack',
        display: 'minimal-ui',
        icon: 'static/favicon/favicon.png'
      },
    },
    `gatsby-plugin-offline`
  ],
};
