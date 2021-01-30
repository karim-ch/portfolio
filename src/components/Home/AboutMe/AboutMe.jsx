import React from "react"
import withStyle from "./withStyle"

const AboutMe = ({ className }) => {
  return (
    <div
      className={className}
      style={{ border: "solid 1px blue", width: "100%", height: "800px" }}
    >
      <h1> AAAAAAAAAAA </h1>
      <h2> AAAAAAAAAAA </h2>
    </div>
  )
}

export default withStyle(AboutMe)
