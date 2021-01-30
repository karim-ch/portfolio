import React from "react"
import { graphql } from "gatsby"

const TestPage = props => {
  return (
    <div>
      {/*<SEO title="My blog" keywords={[`blog`, `gatsby`, `prismic`]} />*/}
      {/*{props.data.articles.edges.map(article => (*/}
      {/*  <Article slug={article.node.slugs[0]} data={article.node.data} />*/}
      {/*))}*/}
    </div>
  )
}

export const IndexQuery = graphql`
  query MyQuery {
    allPrismicArticle {
      edges {
        node {
          data {
            paragraph {
              text
            }
            image {
              url
              alt
            }
            title {
              text
            }
          }
        }
      }
    }
  }
`

export default TestPage
