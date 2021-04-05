import React, { useState, useCallback } from "react"
import { ThemeProvider } from "theme"
import { withPrefix } from "gatsby"
import Navbar from "./components/Navbar"
import { Helmet } from "react-helmet"
import Footer from "./components/Footer"
import Main from "./components/Main"
import withStyle from "./withStyle"
import Drawer from "./components/Drawer"
import useWindowSize from "../hooks/useWindowSize"

const Layout = ({ children, className }) => {
  const [drawerCollapsed, setDrawerCollapsed] = useState(false)
  const { width } = useWindowSize()

  const isMobile = width < 820
  const toggle = useCallback(() => setDrawerCollapsed(v => !v), [])

  return (
    <ThemeProvider>
      <Helmet>
        <script src={withPrefix("script.js")} type="text/javascript" />
      </Helmet>
      <div className={className}>
        {drawerCollapsed && isMobile && <Drawer toggle={toggle} />}
        {drawerCollapsed && isMobile && <div className="overlay" />}
        <Navbar toggle={toggle} />
        <Main>{children}</Main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
export default withStyle(Layout)
