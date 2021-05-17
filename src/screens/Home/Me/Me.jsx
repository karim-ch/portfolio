import React, { useCallback, useState } from "react"
import withStyle from "./withStyle"
import Scene from "../../../components/3d/Scene"
import Laptop from "../../../components/3d/Laptop"

const Me = ({ className }) => {
  const [isRotating, setIsRotating] = useState(true)
  // const [animation, setAnimation] = useState("empty")

  // const enter = useCallback(param => {
  //   setAnimation(param)
  //   setIsRotating(false)
  // }, [])

  return (
    <section className={className}>
      <div className="container">
        <div className="left">
          <h3 className="me">
            <span>Hey</span>, I'm Karim
          </h3>
          <h3
            className="build"
            // onMouseEnter={() => enter("build")}
          >
            I BUILD
          </h3>
          <h3 className="role">CREATIVE</h3>
          <h3 className="role">UNIQUE</h3>
          <h3 className="role">EXPERIENCES</h3>
        </div>
        <div className="right">
          <Scene isRotating={isRotating}>
            <Laptop />
          </Scene>
        </div>
      </div>
    </section>
  )
}

export default withStyle(Me)
