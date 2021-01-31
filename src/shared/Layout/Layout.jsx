import React from "react"
import { ThemeProvider } from "theme"
import { withPrefix } from "gatsby"
import Navbar from "./components/Navbar"
import { Helmet } from "react-helmet"
import Footer from "./components/Footer"
import Main from "./components/Main"

const Layout = ({ children, className }) => {
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
