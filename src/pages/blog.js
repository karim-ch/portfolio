import React from "react"
import Layout from "shared/Layout"
import Blog from "components/Blog"
import SEO from "shared/Layout/components/SEO"

const BlogPage = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Blog />
    </Layout>
  )
}

export default BlogPage
