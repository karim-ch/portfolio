require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Karim Chaari`,
    description: `Welcome to my personal website`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./src",
        aliases: {
          components: "./components",
          theme: "./theme",
          shared: "./shared",
          fonts: "./fonts",
          static: {
            root: "./public",
            alias: "./static",
          },
        },
      },
    },
    `gatsby-plugin-lodash`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    `gatsby-transformer-remark`,
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
        name: `Karim Chaari`,
        short_name: `karim`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        schemas: {
          article: {
            Main: {
              title: {
                type: "StructuredText",
                config: {
                  single:
                    "heading1, heading2, heading3, heading4, heading5, heading6",
                  label: "title",
                },
              },
              image: {
                type: "Image",
                config: {
                  constraint: {},
                  thumbnails: [],
                  label: "image",
                },
              },
              paragraph: {
                type: "StructuredText",
                config: {
                  multi:
                    "paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, rtl",
                  label: "paragraph",
                },
              },
            },
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
