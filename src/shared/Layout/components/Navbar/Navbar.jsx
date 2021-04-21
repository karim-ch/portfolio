import React from "react"
import { useTheme } from "theme"
import Toggle from "./components/Toggle"
import withStyle from "./withStyle"
import { genericHashLink } from "react-router-hash-link"
import GatsbyLink from "gatsby-link"
import { useScrollContext } from "shared/ScrollContext"
import useWindowSize from "shared/hooks/useWindowSize"
import { Icon } from "components/icons"
import useConfig from "../../../hooks/useconfig"

const HashLink = genericHashLink(GatsbyLink)

const Navbar = ({ className, toggle }) => {
  const {
    resume: { url },
  } = useConfig()

  const { filters } = useScrollContext()
  const { name: themeName, setTheme } = useTheme()
  const { width } = useWindowSize()
  const isMobile = width < 820

  const isElemFocused = section => filters?.page === section

  return (
    <header className={className}>
      <a className="logo" href="/">
        <Icon name="Logo" />
      </a>

      {!isMobile && (
        <ul className="sections">
          <Toggle
            onClick={() =>
              setTheme({
                name: themeName === "dark" ? "light" : "dark",
              })
            }
            checked={themeName === "dark"}
          />
          <HashLink to="/#about">
            <li className={isElemFocused("about") && "active"}>About</li>
          </HashLink>

          <HashLink to="/#experiences">
            <li className={isElemFocused("experiences") && "active"}>
              Experience
            </li>
          </HashLink>

          <HashLink to="/#projects">
            <li
              className={
                (isElemFocused("projects") || isElemFocused("prizes")) &&
                "active"
              }
            >
              Projects
            </li>
          </HashLink>

          <HashLink to="/#contact">
            <li className={isElemFocused("contact") && "active"}>Contact</li>
          </HashLink>

          <GatsbyLink to="/blog">
            <li>Blog</li>
          </GatsbyLink>
          <li>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="resume-btn"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
      {isMobile && (
        <ul className="sections">
          <button className="burger" onClick={toggle}>
            <Icon name="Burger" />
          </button>
        </ul>
      )}
    </header>
  )
}

export default withStyle(Navbar)
