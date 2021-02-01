import React from "react"
import { useTheme } from "theme"
import Toggle from "./components/Toggle"
import withStyle from "./withStyle"
import { Link } from "gatsby"
import { useScrollContext } from "shared/ScrollContext"

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
        <Link to="/about">
          <li className={isElemFocused("/about") && "active"}>About</li>
        </Link>
        <Link to="/experiences">
          <li className={isElemFocused("/experiences") && "active"}>
            Experience
          </li>
        </Link>
        <Link to="/projects">
          <li className={isElemFocused("/projects") && "active"}>Projects</li>
        </Link>
        <Link to="/contact">
          <li className={isElemFocused("/contact") && "active"}>Contact</li>
        </Link>
        <Link to="/blog">
          <li>Blog</li>
        </Link>
        <li className="resume-btn">Resume</li>
      </ul>
    </header>
  )
}

export default withStyle(Navbar)
