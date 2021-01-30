import React, { createRef, useEffect } from "react"
import withStyle from "./withStyle"
import AboutMe from "./AboutMe"

const Home = ({ pathname, className }) => {
  const sections = [
    {
      sectionName: "/me",
      Component: AboutMe,
    },
    // {
    //   sectionName: "/anotherSection",
    //   Component: AnotherSection,
    // },
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
