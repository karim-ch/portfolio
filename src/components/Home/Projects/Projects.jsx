import React from "react"
import Project from "./Components/Project"
import withStyle from "./withStyle"
import useProjects from "./Components/useProjects"
import { Icon } from "../../icons"
import useConfig from "../../../shared/hooks/useconfig"

const Projects = ({ className }) => {
  const { githubProjects } = useProjects()
  const { github } = useConfig()

  return (
    <section className={className}>
      <h2 className="heading line"> Projects & Awards </h2>
      <div className="projects-container">
        <h3 className="heading sm"> Some Things I’ve Built </h3>
        <div className="projects">
          {githubProjects.map(project => (
            <div className="project-item hvr-grow">
              <Project project={project} />
            </div>
          ))}
        </div>
      </div>
      <div className="btn-container">
        <a
          href={github.url}
          className="btn-see-more"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="learn">See more</span>
          <span className="arrow">
            <Icon name="Arrow" />
          </span>
        </a>
      </div>
    </section>
  )
}

export default withStyle(Projects)
