import React, { createRef, useEffect } from "react"
import withStyle from "./withStyle"
import AboutMe from "./AboutMe"
import Experiences from "./Experiences"
import Me from "./Me"
import Contact from "./Contact"

const Home = ({ pathname, className }) => {
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
  }, [focusedSection, refs])

  return (
    <div className={className}>
      <Me />
      {sections.map(({ sectionName, Component }) => {
        return (
          <div ref={refs[sectionName]} key={sectionName}>
            <Component />
          </div>
        )
      })}
    </div>
  )
}

export default withStyle(Home)
