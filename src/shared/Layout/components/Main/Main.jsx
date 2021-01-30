import React from "react"
import withStyle from "./withStyle"

const Main = ({ className, children }) => {
  return <div className={className}>{children}</div>
}

export default withStyle(Main)
