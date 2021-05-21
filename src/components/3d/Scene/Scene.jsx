import React, { useEffect, useState } from "react"
import withStyle from "./withStyle"
import Laptop from "../Laptop"

const Scene = ({ className, animation }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let timer
    if (animation) {
      setIsVisible(false)
      timer = setTimeout(() => {
        setIsVisible(true)
      }, 10)
    }

    return () => clearTimeout(timer)
  }, [animation])

  return (
    <div className={className}>
      {isVisible && (
        <div className="scene">
          <Laptop animation={animation} />
        </div>
      )}
    </div>
  )
}

export default withStyle(Scene)
