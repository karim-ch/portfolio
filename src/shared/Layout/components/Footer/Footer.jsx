import React from "react"
import withStyle from "./withStyle"

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <text>
        Designed and build with{" "}
        <span role="img" aria-label="heart">
          💙
        </span>{" "}
        by Karim Chaari{" "}
        <span role="img" aria-label="victory">
          ✌
        </span>
      </text>
      <br />
      <small>{new Date().getFullYear()} ©</small>
    </footer>
  )
}

export default withStyle(Footer)
