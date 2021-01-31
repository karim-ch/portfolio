import React from "react"
import Layout from "shared/Layout"
import SEO from "shared/Layout/components/SEO"
import Home from "components/Home"

const IndexPage = ({ location }) => {
  const { pathname } = location

  return (
    <Layout>
      <SEO title="Home" />
      <Home pathname={pathname} />
    </Layout>
  )
}

export default IndexPage
