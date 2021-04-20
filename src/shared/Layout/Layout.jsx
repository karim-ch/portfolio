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
import Social from "./components/Social"
import Mail from "./components/Mail"

const Layout = ({ children, className }) => {
  const [drawerVisible, setDrawerVisible] = useState(false)
  const [isDrawerBeingClosed, setDrawerBeingClosed] = useState(false)
  const { width } = useWindowSize()

  const isMobile = width < 820

  const toggle = useCallback(() => {
    if (drawerVisible) {
      setDrawerBeingClosed(true)
      setTimeout(() => {
        setDrawerVisible(false)
        setDrawerBeingClosed(false)
      }, 500)
    } else {
      setDrawerVisible(true)
    }
  }, [drawerVisible])

  return (
    <ThemeProvider>
      <Helmet>
        <script src={withPrefix("script.js")} type="text/javascript" />
      </Helmet>
      <div className={className}>
        {drawerVisible && isMobile && (
          <Drawer toggle={toggle} isDrawerBeingClosed={isDrawerBeingClosed} />
        )}
        {drawerVisible && isMobile && <div className="overlay" />}
        <Navbar toggle={toggle} />
        <Main>{children}</Main>
        <Footer />
        {!isMobile && <Social />}
        {!isMobile && <Mail />}
      </div>
    </ThemeProvider>
  )
}
export default withStyle(Layout)
