import React from "react"
import withStyle from "./withStyle"

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <h5>
        Designed and build with{" "}
        <span role="img" aria-label="heart">
          💙
        </span>{" "}
        by Karim Chaari{" "}
        <span role="img" aria-label="victory">
          ✌
        </span>
      </h5>
      <h5>{new Date().getFullYear()} ©</h5>
    </footer>
  )
}

export default withStyle(Footer)
