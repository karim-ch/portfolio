import React from "react"
import withStyle from "./withStyle"

const Animation = ({ className }) => {
  return (
    <div className={className}>
      <div className="group">
        {Array.from({ length: 4 }).map(_ => (
          <div className="row">
            {Array.from({ length: 5 }).map(_ => (
              <div className={`tab ${Math.random() > 0.4 && "green"}`} />
            ))}
          </div>
        ))}
      </div>
      <div className="group">
        {Array.from({ length: 4 }).map(_ => (
          <div className="row">
            {Array.from({ length: 5 }).map(_ => (
              <div className={`tab ${Math.random() > 0.7 && "green"}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default withStyle(Animation)
