import React from "react"
import withStyle from "./withStyle"
import GatsbyLink from "gatsby-link"
import { genericHashLink } from "react-router-hash-link"
import { useScrollContext } from "shared/ScrollContext"
import Toggle from "../Navbar/components/Toggle/Toggle"
import { useTheme } from "theme"
import { Icon } from "components/icons"

const MyHashLink = genericHashLink(GatsbyLink)

const Drawer = ({ className, toggle }) => {
  const { name: themeName, setTheme } = useTheme()
  const { filters } = useScrollContext()
  const isElemFocused = section => filters?.page === section

  return (
    <div className={className}>
      <div className="top">
        <button onClick={toggle}>
          <Icon name="Close" />
        </button>

        <Toggle
          onClick={() =>
            setTheme({
              name: themeName === "dark" ? "light" : "dark",
            })
          }
          checked={themeName === "dark"}
        />
      </div>
      <ul className="drawer-sections">
        <MyHashLink
          to="/#about"
          scroll={el => el.scrollIntoView({ behavior: "smooth" })}
          onClick={toggle}
        >
          <li className={isElemFocused("about") && "active"}>About</li>
        </MyHashLink>

        <MyHashLink
          to="/#experiences"
          scroll={el => el.scrollIntoView({ behavior: "smooth" })}
          onClick={toggle}
        >
          <li className={isElemFocused("experiences") && "active"}>
            Experience
          </li>
        </MyHashLink>

        <MyHashLink
          to="/#projects"
          scroll={el => el.scrollIntoView({ behavior: "smooth" })}
          onClick={toggle}
        >
          <li className={isElemFocused("projects") && "active"}>Projects</li>
        </MyHashLink>

        <MyHashLink
          to="/#contact"
          scroll={el => el.scrollIntoView({ behavior: "smooth" })}
          onClick={toggle}
        >
          <li className={isElemFocused("contact") && "active"}>Contact</li>
        </MyHashLink>

        <GatsbyLink to="/blog">
          <li>Blog</li>
        </GatsbyLink>
        <li className="resume-btn">Resume</li>
      </ul>
    </div>
  )
}

export default withStyle(Drawer)