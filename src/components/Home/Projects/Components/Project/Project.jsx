import React from "react"
import withStyle from "./withStyle"
import { Icon } from "components/icons"

const Project = ({ className, project: { keywords = [] } }) => {
  return (
    <div className={className}>
      <div className="project-title">
        <div className="green">
          <Icon name="Folder" />
        </div>
        <div>
          <Icon name="GitHub" />
        </div>
      </div>
      <div className="project-body">
        <h3>Building a Headless Mobile App CMS From Scratch</h3>
        <p>
          Find out how we built a custom headless CMS with Node, Express, and
          Firebase for a project at Upstatement
        </p>
      </div>
      <ul className="project-footer">
        {keywords.map(keyword => (
          <li>{keyword}</li>
        ))}
      </ul>
    </div>
  )
}

export default withStyle(Project)
