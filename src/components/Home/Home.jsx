import React, { createRef, useCallback, useEffect } from "react"
import withStyle from "./withStyle"
import AboutMe from "./AboutMe"
import Experiences from "./Experiences"
import Me from "./Me"
import Contact from "./Contact"
import Projects from "./Projects/Projects"
import VizSensor from "react-visibility-sensor"
import { useScrollContext } from "shared/ScrollContext"

const Home = ({ pathname, className }) => {
  const { setFilter } = useScrollContext()

  const sections = [
    {
      sectionName: "/about",
      Component: AboutMe,
    },
    {
      sectionName: "/experiences",
      Component: Experiences,
    },
    {
      sectionName: "/projects",
      Component: Projects,
    },
    {
      sectionName: "/contact",
      Component: Contact,
    },
  ]

  const focusedSection =
    sections.find(({ sectionName }) => sectionName === pathname)?.sectionName ??
    null

  const refs = sections.reduce((acc, value) => {
    acc[value.sectionName] = createRef()
    return acc
  }, {})

  useEffect(() => {
    if (focusedSection) {
      refs[focusedSection].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }, [focusedSection])

  const setPage = useCallback(setFilter("page"))

  return (
    <div className={className}>
      <Me />
      {sections.map(({ sectionName, Component }) => {
        return (
          <div
            style={{ scrollMarginTop: "110px" }}
            ref={refs[sectionName]}
            key={sectionName}
          >
            <VizSensor
              onChange={isVisible => isVisible && setPage(sectionName)}
            >
              <Component />
            </VizSensor>
          </div>
        )
      })}
    </div>
  )
}

export default withStyle(Home)
