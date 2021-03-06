// const path = require("path")

// blog
// exports.createPages = ({ boundActionCreators, graphql }) => {
//   const { createPage } = boundActionCreators
//   const postTemplate = path.resolve("src/templates/blog.post.js")
//   return graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             id
//             html
//             frontmatter {
//               path
//               title
//               date
//               author
//             }
//           }
//         }
//       }
//     }
//   `).then(res => {
//     if (res.errors) {
//       return Promise.reject(res.errors)
//     }
//     res.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({ path: node.frontmatter.path, component: postTemplate })
//     })
//   })
// }

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  if (page.path === `/`) {
    page.matchPath = `/*`
    createPage(page)
  }
}
