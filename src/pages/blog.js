import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "shared/Layout"
import SEO from "shared/Layout/components/SEO"

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Latest Posts</h1>
      {posts.map(
        ({
          node: {
            id,
            frontmatter: { title, path, date, author },
          },
        }) => (
          <div key={id}>
            <h3>{title}</h3>
            <small>
              Posted by: {author} on {date}
            </small>
            <Link to={path}> Read More</Link>
          </div>
        )
      )}
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default BlogPage
