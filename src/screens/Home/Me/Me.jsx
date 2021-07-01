import React from "react"
import withStyle from "./withStyle"
import MyPic from "./MyPic"

const Me = ({ className }) => {
  return (
    <section className={className}>
      <div className="container">
        <div className="left">
          <h3 className="intro">Hey there !</h3>
          <h3 className="me">I'm Karim, and I create </h3>
          <h3 className="role ">CREATIVE</h3>
          <h3 className="role role--unique">UNIQUE</h3>
          <h3 className="role role--experiences">EXPERIENCES</h3>
        </div>
        <div className="right">
          <MyPic />
        </div>
      </div>
    </section>
  )
}

export default withStyle(Me)
