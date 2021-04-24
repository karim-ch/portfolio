import React, { useRef } from "react"
import GatsbyLink from "gatsby-link"
import { genericHashLink } from "react-router-hash-link"
import { useScrollContext } from "shared/ScrollContext"
import Toggle from "../Navbar/components/Toggle/Toggle"
import { useTheme } from "theme"
import { Icon } from "components/icons"
import useConfig from "shared/hooks/useconfig"
import withStyle from "./withStyle"
import useOnClickOutside from "shared/hooks/useOnClickOutside"
import useLockBodyScroll from "shared/hooks/useLockBodyScroll"

const MyHashLink = genericHashLink(GatsbyLink)

const Drawer = ({ className, toggle, isDrawerBeingClosed }) => {
  const {
    resume: { url },
  } = useConfig()

  const { name: themeName, setTheme } = useTheme()
  const { filters } = useScrollContext()
  const isElemFocused = section => filters?.page === section

  const ref = useRef(null)
  useOnClickOutside(ref, toggle)
  useLockBodyScroll()

  return (
    <div className={className} ref={ref}>
      <div className={`drawer ${isDrawerBeingClosed ? "drawer--closing" : ""}`}>
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
          <MyHashLink to="/#about" onClick={toggle}>
            <li className={isElemFocused("about") && "active"}>About</li>
          </MyHashLink>

          <MyHashLink to="/#experiences" onClick={toggle}>
            <li className={isElemFocused("experiences") && "active"}>
              Experience
            </li>
          </MyHashLink>

          <MyHashLink to="/#projects" onClick={toggle}>
            <li className={isElemFocused("projects") && "active"}>Projects</li>
          </MyHashLink>

          <MyHashLink to="/#contact" onClick={toggle}>
            <li className={isElemFocused("contact") && "active"}>Contact</li>
          </MyHashLink>

          <GatsbyLink to="/blog">
            <li>Blog</li>
          </GatsbyLink>
          <a href={url} target="_blank" rel="noreferrer" className="resume-btn">
            Resume
          </a>
        </ul>
      </div>
    </div>
  )
}

export default withStyle(Drawer)
