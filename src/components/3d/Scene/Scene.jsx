import React from "react"
import withStyle from "./withStyle"

const Scene = ({ className, children }) => {
  return (
    <div className={className}>
      <div className="scene">{children}</div>
    </div>
  )
}

export default withStyle(Scene)
