import React from "react"

import withStyle from "./withStyle"

const Experiences = ({ className }) => {
  return (
    <section className={className}>
      <h2 className="heading">Where I’ve Worked</h2>
    </section>
  )
}

export default withStyle(Experiences)
