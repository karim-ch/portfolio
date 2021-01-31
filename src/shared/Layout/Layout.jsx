import React from "react"
import { ThemeProvider } from "../../theme"
import { useStaticQuery, graphql, withPrefix } from "gatsby"
import Navbar from "./components/Navbar"
import { Helmet } from "react-helmet"
import Footer from "./components/Footer"
import Main from "./components/Main"

const Layout = ({ children, className }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  //
  // const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <ThemeProvider>
      <Helmet>
        <script src={withPrefix("script.js")} type="text/javascript" />
      </Helmet>
      <div className={className}>
        <Navbar />
        <Main>{children}</Main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
export default Layout
