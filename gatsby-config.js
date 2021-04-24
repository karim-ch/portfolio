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
          screens: "./screens",
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
        repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.GATSBY_PRISMIC_ACCESS_TOKEN,
        schemas: {
          header: {
            introduction: {
              type: "StructuredText",
              config: {
                multi:
                  "paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, rtl",
                label: "introduction",
              },
            },
            pic: {
              type: "Image",
              config: {
                constraint: {},
                thumbnails: [],
                label: "pic",
              },
            },
            skills: {
              type: "Group",
              config: {
                fields: {
                  skill: {
                    type: "StructuredText",
                    config: {
                      multi: "list-item",
                      label: "skill",
                    },
                  },
                },
                label: "skills",
              },
            },
          },
          jobs: [
            {
              order: {
                type: "StructuredText",
                config: {
                  single:
                    "heading1, heading2, heading3, heading4, heading5, heading6",
                  label: "order",
                },
              },
              title: {
                type: "StructuredText",
                config: {
                  single:
                    "heading1, heading2, heading3, heading4, heading5, heading6",
                  label: "title",
                },
              },
              url: {
                type: "StructuredText",
                config: {
                  single:
                    "heading1, heading2, heading3, heading4, heading5, heading6",
                  label: "url",
                },
              },
              location: {
                type: "StructuredText",
                config: {
                  single:
                    "heading1, heading2, heading3, heading4, heading5, heading6",
                  label: "location",
                },
              },
              company: {
                type: "StructuredText",
                config: {
                  single:
                    "heading1, heading2, heading3, heading4, heading5, heading6",
                  label: "company",
                },
              },
              range: {
                type: "StructuredText",
                config: {
                  single:
                    "heading1, heading2, heading3, heading4, heading5, heading6",
                  label: "range",
                },
              },
              description: {
                type: "StructuredText",
                config: {
                  multi:
                    "paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, rtl",
                  allowTargetBlank: true,
                  label: "description",
                },
              },
            },
          ],
          events: [
            {
              title: {
                type: "StructuredText",
                config: {
                  single:
                    "heading1, heading2, heading3, heading4, heading5, heading6",
                  label: "title",
                },
              },
              type: {
                type: "StructuredText",
                config: {
                  single:
                    "heading1, heading2, heading3, heading4, heading5, heading6",
                  label: "type",
                },
              },
              description: {
                type: "StructuredText",
                config: {
                  multi:
                    "paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, rtl",
                  label: "description",
                },
              },
              date: {
                type: "Date",
                config: {
                  label: "date",
                },
              },
              url: {
                type: "Link",
                config: {
                  label: "url",
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
              skills: {
                type: "Group",
                config: {
                  fields: {
                    skill: {
                      type: "StructuredText",
                      config: {
                        single:
                          "heading1, heading2, heading3, heading4, heading5, heading6",
                        label: "skill",
                      },
                    },
                  },
                  label: "skills",
                },
              },
            },
          ],
          links: {
            linkedin: {
              type: "Link",
              config: {
                label: "linkedin",
              },
            },
            instagram: {
              type: "Link",
              config: {
                label: "instagram",
              },
            },
            github: {
              type: "Link",
              config: {
                label: "github",
              },
            },
            mail: {
              type: "StructuredText",
              config: {
                single:
                  "heading1, heading2, heading3, heading4, heading5, heading6",
                label: "mail",
              },
            },
            twitter: {
              type: "Link",
              config: {
                label: "twitter",
              },
            },
            resume: {
              type: "Link",
              config: {
                label: "resume",
              },
            },
          },
        },
      },
    },

    `gatsby-plugin-offline`,
  ],
}
