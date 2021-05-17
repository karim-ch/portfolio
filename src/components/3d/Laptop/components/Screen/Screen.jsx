import React from "react"
import withStyle from "./withStyle"

const Screen = ({ className }) => {
  return (
    <div className={className}>
      <div className="screenBack" />
      <div className="screen" />
    </div>
  )
}

export default withStyle(Screen)
