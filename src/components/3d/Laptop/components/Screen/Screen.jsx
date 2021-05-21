import React from "react"
import withStyle from "./withStyle"
import Animation from "./Animation"

const Screen = ({ className, animation }) => {
  return (
    <div className={className}>
      <div className="screenBack" />
      <div className="screen">{animation === "build" && <Animation />}</div>
    </div>
  )
}

export default withStyle(Screen)
