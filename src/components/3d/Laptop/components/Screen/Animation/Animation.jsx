import React from "react"
import withStyle from "./withStyle"

const Animation = ({ className }) => {
  return (
    <div className={className}>
      <div className="div">
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  )
}

export default withStyle(Animation)
