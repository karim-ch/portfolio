import React, { useState } from "react"
import withStyle from "./withStyle"
import Scene from "../../../components/3d/Scene"

const Me = ({ className }) => {
  const [animation, setAnimation] = useState()

  return (
    <section className={className}>
      <div className="container">
        <div className="left">
          <h3 className="hey">Hey there !</h3>
          <h3 className="build">I'm Karim, and I create </h3>
          <h3 className="role " onMouseEnter={() => setAnimation("build")}>
            CREATIVE
          </h3>
          <h3
            className="role role--unique"
            onMouseEnter={() => setAnimation("unique")}
          >
            UNIQUE
          </h3>
          <h3
            className="role role--experiences"
            onMouseEnter={() => setAnimation("experience")}
          >
            EXPERIENCES
          </h3>
        </div>
        <div className="right">
          <Scene animation={animation} />
        </div>
      </div>
    </section>
  )
}

export default withStyle(Me)
