import React from "react"
import withStyle from "./withStyle"
import useConfig from "../../../hooks/useconfig"

const Mail = ({ className }) => {
  const { mail } = useConfig()
  const [{ text: email }] = mail
  return (
    <div className={className}>
      <a href={`mailto:${email}`}>
        <h6>{email}</h6>
      </a>
    </div>
  )
}

export default withStyle(Mail)
