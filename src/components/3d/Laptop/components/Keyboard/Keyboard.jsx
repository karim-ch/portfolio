import React from "react"
import withStyle from "./withStyle"

const keyboard = [10, 14, 14, 14, 13, 8]

const Keyboard = ({ className }) => {
  return (
    <div className={className}>
      <div className="bottomFace" />
      <div className="topFace">
        {keyboard.map(row => (
          <div className="keysRow">
            {Array.from({ length: row }).map(__ => (
              <div className="key" />
            ))}
          </div>
        ))}

        <div className="keypad" />
      </div>
    </div>
  )
}

export default withStyle(Keyboard)
