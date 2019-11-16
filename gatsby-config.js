require('dotenv').config({
  path: `.env.${ process.env.NODE_ENV }`,
})

module.exports = {
  siteMetadata: {
    title: 'Souleymane Dembele',
    siteUrl: 'https://www.souleymanedembele.com',
    menuLinks: [
      {
        name: 'Blog',
        link: '/blog',
      },
      {
        name: 'About Me',
        link: '/about',
      },
      {
        name: 'Contact',
        link: '/contact',
      }
    ],
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${ __dirname }/src/images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${ __dirname }/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Souleymane Dembele',
        short_name: 'Souleymane',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.svg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          posts: require.resolve('./src/templates/blog-post.js'),
        },
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                {
                  resolve: 'gatsby-remark-external-links',
                  options: {
                    target: '_target',
                    rel: 'nofollow'
                  },
                }
              ],
            },
          },
        ],
      },
    },
  ],
}
