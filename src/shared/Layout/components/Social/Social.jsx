import React from "react"
import withStyle from "./withStyle"
import { Icon } from "components/icons"
import useConfig from "../../../hooks/useconfig"

const Social = ({ className }) => {
  const { github, linkedin, instagram, twitter } = useConfig()

  return (
    <div className={className}>
      <a href={github.url} target="_blank" rel="noreferrer">
        <Icon name="GitHub" />
      </a>
      <a href={linkedin.url} target="_blank" rel="noreferrer">
        <Icon name="Linkedin" />
      </a>
      <a href={instagram.url} target="_blank" rel="noreferrer">
        <Icon name="Instagram" />
      </a>
      <a href={twitter.url} target="_blank" rel="noreferrer">
        <Icon name="Twitter" />
      </a>
    </div>
  )
}

export default withStyle(Social)
