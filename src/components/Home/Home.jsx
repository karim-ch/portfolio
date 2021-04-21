import React, { useCallback } from "react"
import withStyle from "./withStyle"
import AboutMe from "./AboutMe"
import Experiences from "./Experiences"
import Me from "./Me"
import Contact from "./Contact"
import Projects from "./Projects"
import Prizes from "./Prizes"
import VizSensor from "react-visibility-sensor"
import { useScrollContext } from "shared/ScrollContext"

const Home = ({ className }) => {
  const { setFilter } = useScrollContext()
  const setPage = useCallback(setFilter("page"), [])

  const sections = [
    {
      sectionName: "about",
      Component: AboutMe,
    },
    // {
    //   sectionName: "experiences",
    //   Component: Experiences,
    // },
    {
      sectionName: "projects",
      Component: Projects,
    },
    {
      sectionName: "prizes",
      Component: Prizes,
    },
    {
      sectionName: "contact",
      Component: Contact,
    },
  ]

  return (
    <div className={className}>
      <Me />
      {sections.map(({ sectionName, Component }) => {
        return (
          <section key={sectionName} id={sectionName}>
            <VizSensor
              partialVisibility
              onChange={isVisible => isVisible && setPage(sectionName)}
            >
              <Component />
            </VizSensor>
          </section>
        )
      })}
    </div>
  )
}

export default withStyle(Home)
