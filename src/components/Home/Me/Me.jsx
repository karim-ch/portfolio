import React from "react"
import withStyle from "./withStyle"
import { Link } from "gatsby"

const Me = ({ className }) => {
  return (
    <section className={className}>
      <h3 className="welcome">Hi there ! my name is</h3>
      <h1 className="name">Karim Chaari</h1>
      <h2 className="description">I'm a FullStack Web Developer 👨‍💻</h2>
      <p>
        I'm a javascript software engineer. I'm specialized in building (and
        sometimes designing) high quality websites, applications, and everything
        in between.
      </p>
      <Link to="/about">
        <button> About Me </button>{" "}
      </Link>
    </section>
  )
}

export default withStyle(Me)
