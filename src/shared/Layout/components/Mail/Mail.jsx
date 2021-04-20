import React from "react"
import withStyle from "./withStyle"

const Mail = ({ className }) => {
  return (
    <div className={className}>
      <h6>chaari.karim.plus@gmail.com</h6>
    </div>
  )
}

export default withStyle(Mail)
