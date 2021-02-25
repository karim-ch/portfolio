import React from "react"
import withStyle from "./withStyle"

const Prize = ({ className, prize }) => {
  const { url, title, description, date, image, type } = prize
  return (
    <div className={className}>
      <div className="text-container">
        <h5 className="type">{type}</h5>
        <h2 className="title">{title}</h2>
        <p>{description}</p>
        <h6>Nodejs</h6>
      </div>
      <div className="image-container"></div>
    </div>
  )
}

export default withStyle(Prize)
