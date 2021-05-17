import React from "react"
import withStyle from "./withStyle"
import Keyboard from "./components/Keyboard"
import Screen from "./components/Screen"

const Laptop = ({ className }) => {
  return (
    <div className={className}>
      <div className="laptop">
        <Screen />
        <Keyboard />
      </div>
    </div>
  )
}

export default withStyle(Laptop)
