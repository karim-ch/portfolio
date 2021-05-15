import React, { useRef } from "react"
import GatsbyLink from "gatsby-link"
import { genericHashLink } from "react-router-hash-link"
import { useScrollContext } from "shared/ScrollContext"
import useConfig from "shared/hooks/useconfig"
import withStyle from "./withStyle"
import useOnClickOutside from "shared/hooks/useOnClickOutside"
import useLockBodyScroll from "shared/hooks/useLockBodyScroll"

const MyHashLink = genericHashLink(GatsbyLink)

const Drawer = ({ className, toggle, isDrawerBeingClosed }) => {
  const {
    resume: { url },
  } = useConfig()

  const { filters } = useScrollContext()
  const isElemFocused = section => filters?.page === section

  const ref = useRef(null)
  useOnClickOutside(ref, toggle)
  useLockBodyScroll()

  return (
    <div className={className} ref={ref}>
      <div className={`drawer ${isDrawerBeingClosed ? "drawer--closing" : ""}`}>
        <ul className="drawer-sections">
          <text className="menu">MENU</text>
          <MyHashLink to="/#about" onClick={toggle}>
            <li className={`li ${isElemFocused("about") && "li--active"}`}>
              About
            </li>
          </MyHashLink>

          <MyHashLink to="/#experiences" onClick={toggle}>
            <li
              className={`li ${isElemFocused("experiences") && "li--active"}`}
            >
              Experience
            </li>
          </MyHashLink>

          <MyHashLink to="/#projects" onClick={toggle}>
            <li className={`li ${isElemFocused("projects") && "li--active"}`}>
              Projects
            </li>
          </MyHashLink>

          <MyHashLink to="/#contact" onClick={toggle}>
            <li className={`li ${isElemFocused("contact") && "li--active"}`}>
              Contact
            </li>
          </MyHashLink>

          <GatsbyLink to="/blog">
            <li className="li">Blog</li>
          </GatsbyLink>

          <a href={url} target="_blank" rel="noreferrer" className="resume-btn">
            <li className={`li resume`}>Resume</li>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default withStyle(Drawer)
