import React from "react"
import Project from "./Components/Project"
import withStyle from "./withStyle"
import Prize from "./Components/Prize"

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
const prizes = [
  {
    type: "Hackathon",
    title: "Hacking Health",
    date: "april 2020",
    image: "sdfsdf",
    url: "123",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    type: "Hackathon",
    title: "Hacking Health",
    date: "april 2020",
    image: "sdfsdf",
    url: "123",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    type: "Hackathon",
    title: "Hacking Health",
    date: "april 2020",
    image: "sdfsdf",
    url: "123",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
        <div className="prizes">
          {prizes.map((prize, i) => (
            <div className="prize-item">
              <Prize prize={prize} odd={i % 2 === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default withStyle(Projects)
