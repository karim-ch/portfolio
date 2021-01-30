import React from "react"
import { useTheme } from "theme"
import Toggle from "./components/Toggle"
import { Link } from "gatsby"

const Navbar = ({ siteTitle }) => {
  const { name: themeName, setTheme } = useTheme()

  return (
    <header
      style={{
        background: `rebeccapurple`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Link
          to="/blog"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>

        <Toggle
          onClick={() =>
            setTheme({
              name: themeName === "dark" ? "light" : "dark",
            })
          }
          checked={themeName === "dark"}
        />
      </div>
    </header>
  )
}

export default Navbar
