module.exports = {
  siteMetadata: {
    title: `Ilona Brand`,
    description: `Ilona Brand's Landing Page`,
    siteUrl: `http://theilonabrand.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-twitter`,
    // {
    //   // Requires custom config for MDX
    //   // see: https://www.gatsbyjs.org/packages/gatsby-plugin-feed/
    //   resolve: `gatsby-plugin-feed`
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/assets/img/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],

        // Handle images inside posts
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080,
              tracedSVG: true,
            },
          },
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Ilona Brand's Homepage",
        short_name: "Ilona Brand",
        start_url: "/",
        background_color: "#F5F5F5",
        theme_color: "#000000",
        display: "minimal-ui",
        icon: `static/assets/favicon/android-chrome-512x512.png`, // This path is relative to the root of the site.
        // icons: [
        //   {
        //     // Everything in /static will be copied to an equivalent
        //     // directory in /public during development and build, so
        //     // assuming your favicons are in /static/favicons,
        //     // you can reference them here
        //     src: `/assets/favicons/android-chrome-192x192.png`,
        //     sizes: `192x192`,
        //     type: `image/png`,
        //   },
        //   {
        //     src: `/assets/favicons/android-chrome-512x512.png`,
        //     sizes: `512x512`,
        //     type: `image/png`,
        //   },
        // ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // output: `/some-other-sitemap.xml`,
        // exclude: [`/path/to/page`, `/another/page`],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-116899380-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
  ],
};
