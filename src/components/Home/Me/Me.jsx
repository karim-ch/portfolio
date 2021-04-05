import React from "react"
import withStyle from "./withStyle"
import { genericHashLink } from "react-router-hash-link"
import GatsbyLink from "gatsby-link"

const MyHashLink = genericHashLink(GatsbyLink)

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

      <MyHashLink
        to="/#about"
        scroll={el => el.scrollIntoView({ behavior: "smooth" })}
      >
        <button> About Me </button>
      </MyHashLink>
    </section>
  )
}

export default withStyle(Me)
