import React from "react"
import { useTheme } from "theme"
import Toggle from "./components/Toggle"
import withStyle from "./withStyle"
import { Link } from "gatsby"

const Navbar = ({ className }) => {
  const { name: themeName, setTheme } = useTheme()

  return (
    <header className={className}>
      <span>K</span>

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
          <li>About</li>
        </Link>
        <Link to="/experiences">
          <li>Experience</li>
        </Link>
        <Link to="/education">
          <li>Education</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <li className="resume-btn">Resume</li>
      </ul>
    </header>
  )
}

export default withStyle(Navbar)
