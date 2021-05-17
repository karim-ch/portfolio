import React from "react"
import withStyle from "./withStyle"

const Floor = ({ className }) => {
  return (
    <div className={className}>
      <div className="floor" />
    </div>
  )
}

export default withStyle(Floor)
