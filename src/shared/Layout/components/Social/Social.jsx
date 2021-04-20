import React from "react"
import withStyle from "./withStyle"
import { Icon } from "components/icons"

//writing-mode: vertical-rl;

const Social = ({ className }) => {
  return (
    <div className={className}>
      <a href="https://github.com/karim-ch" target="_blank" rel="noreferrer">
        <Icon name="GitHub" />
      </a>
      <a
        href="https://www.linkedin.com/in/karimchaari/"
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="Linkedin" />
      </a>
      <a
        href="https://www.linkedin.com/in/karimchaari/"
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="Instagram" />
      </a>
      <a
        href="https://www.linkedin.com/in/karimchaari/"
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="Twitter" />
      </a>
    </div>
  )
}

export default withStyle(Social)
