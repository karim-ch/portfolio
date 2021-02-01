import React from "react"
import Project from "./Components/Project"
import withStyle from "./withStyle"

const projects = [
  {
    url: "dd",
    title: "Time to Have some fun",
    keywords: ["NextJs", "Android", "Firebase"],
    githubUrl: "ff",
    id: "s",
  },
  {
    url: "dd",
    title: "Time to Have some fun",
    keywords: ["NextJs", "Android", "Firebase"],
    githubUrl: "ff",
    id: "s",
  },
  {
    url: "dd",
    title: "Time to Have some fun",
    keywords: ["NextJs", "Android", "Firebase"],
    githubUrl: "ff",
    id: "s",
  },
  {
    url: "dd",
    title: "Time to Have some fun",
    keywords: ["NextJs", "Android", "Firebase"],
    githubUrl: "ff",
    id: "s",
  },
  {
    url: "dd",
    title: "Time to Have some fun",
    keywords: ["NextJs", "Android", "Firebase"],
    githubUrl: "ff",
    id: "s",
  },
  {
    url: "dd",
    title: "Time to Have some fun",
    keywords: ["NextJs", "Android", "Firebase"],
    githubUrl: "ff",
    id: "s",
  },
]

const Projects = ({ className }) => {
  return (
    <section className={className}>
      <h2 className="heading line"> My Projects & Awards </h2>
      <div className="projects-container">
        <h3 className="heading sm"> Some Things I’ve Built </h3>
        <div className="projects">
          {projects.map(project => (
            <div className="project-item hvr-grow">
              <Project project={project} />
            </div>
          ))}
        </div>

        <h3 className="heading sm"> I've Been Here </h3>
      </div>
    </section>
  )
}

export default withStyle(Projects)
