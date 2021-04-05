import React from "react"
import { useTheme } from "theme"
import Toggle from "./components/Toggle"
import withStyle from "./withStyle"
import { genericHashLink } from "react-router-hash-link"
import GatsbyLink from "gatsby-link"
import { useScrollContext } from "shared/ScrollContext"
import useWindowSize from "shared/hooks/useWindowSize"
import { Icon } from "../../../../components/icons"

const MyHashLink = genericHashLink(GatsbyLink)

const Navbar = ({ className, toggle }) => {
  const { filters } = useScrollContext()
  const { name: themeName, setTheme } = useTheme()
  const { width } = useWindowSize()
  const isMobile = width < 820

  const isElemFocused = section => filters?.page === section

  return (
    <header className={className}>
      <span className="logo">Karim</span>

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
          <MyHashLink
            to="/#about"
            scroll={el => el.scrollIntoView({ behavior: "smooth" })}
          >
            <li className={isElemFocused("about") && "active"}>About</li>
          </MyHashLink>

          <MyHashLink
            to="/#experiences"
            scroll={el => el.scrollIntoView({ behavior: "smooth" })}
          >
            <li className={isElemFocused("experiences") && "active"}>
              Experience
            </li>
          </MyHashLink>

          <MyHashLink
            to="/#projects"
            scroll={el => el.scrollIntoView({ behavior: "smooth" })}
          >
            <li className={isElemFocused("projects") && "active"}>Projects</li>
          </MyHashLink>

          <MyHashLink
            to="/#contact"
            scroll={el => el.scrollIntoView({ behavior: "smooth" })}
          >
            <li className={isElemFocused("contact") && "active"}>Contact</li>
          </MyHashLink>

          <GatsbyLink to="/blog">
            <li>Blog</li>
          </GatsbyLink>
          <li className="resume-btn">Resume</li>
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
