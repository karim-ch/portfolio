import React from "react"
import { useTheme } from "theme"
import Toggle from "./components/Toggle"
import withStyle from "./withStyle"
import { genericHashLink } from "react-router-hash-link"
import GatsbyLink from "gatsby-link"
import { useScrollContext } from "shared/ScrollContext"

const MyHashLink = genericHashLink(GatsbyLink)

const Navbar = ({ className }) => {
  const { filters } = useScrollContext()
  const { name: themeName, setTheme } = useTheme()

  const isElemFocused = section => filters?.page === section

  return (
    <header className={className}>
      <span className="logo">Karim</span>

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
    </header>
  )
}

export default withStyle(Navbar)
