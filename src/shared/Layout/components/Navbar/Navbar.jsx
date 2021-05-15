import React from "react"
import withStyle from "./withStyle"
import { Icon } from "components/icons"

const Navbar = ({ className, toggle, drawerVisible }) => {
  return (
    <header className={className}>
      <a className="logo" href="/">
        <Icon name="Logo" />
        <div className="me">
          <text className="name">KARIM CHAARI</text>
          <text className="job">SOFTWARE ENGINEER</text>
        </div>
      </a>

      <button className="burger" onClick={toggle}>
        <span>{drawerVisible ? "CLOSE" : "MENU"}</span>
        <Icon name={drawerVisible ? "Close" : "Burger"} />
      </button>
    </header>
  )
}

export default withStyle(Navbar)
