import React from "react"
import withStyle from "./withStyle"
import { genericHashLink } from "react-router-hash-link"
import GatsbyLink from "gatsby-link"

const HashLink = genericHashLink(GatsbyLink)

const Me = ({ className }) => {
  return (
    <section className={className}>
      <h3 className="welcome">Hi there ! my name is</h3>
      <h1 className="name">Karim Chaari</h1>
      <h2 className="description">
        I'm a fullStack web developer{" "}
        <span role="img" aria-label="developer">
          👨‍💻
        </span>
      </h2>
      <p>
        I'm a javascript software engineer. I'm specialized in building (and
        sometimes designing) high quality websites, applications, and everything
        in between.
      </p>

      <HashLink to="/#about">
        <button className="about_btn"> About Me </button>
      </HashLink>
    </section>
  )
}

export default withStyle(Me)
