import React, { useState, useRef } from "react"
import withStyle from "./withStyle"

const Experiences = ({ className }) => {
  const jobsData = [
    {
      title: "Engineer",
      url: "aaa",
      company: "Vestalyze",
      range: "May 2018 - Present",
    },
    {
      title: "Team Lead - Javascript & Blockchain Developer",
      url: "aaa",
      company: "Lightency",
      range: "May 2018 - Present",
    },
    {
      title: "FullStack Javascript & Blockchain Trainee",
      url: "aaa",
      company: "Talan",
      range: "May 2018 - Present",
    },
    {
      title: "Mobile Developer Trainee",
      url: "aaa",
      company: "FormaLab",
      range: "May 2018 - Present",
    },
  ]

  const [activeTabId, setActiveTabId] = useState(0)
  const tabs = useRef([])

  return (
    <section className={className}>
      <h2 className="heading">Where I’ve Worked</h2>

      <div>
        <div>
          <ul className="styled-tab-list">
            {jobsData &&
              jobsData.map(({ company }, i) => {
                return (
                  <li key={company}>
                    <button
                      className={`styled-tab-button ${
                        activeTabId === i ? "active" : ""
                      }`}
                      onClick={() => setActiveTabId(i)}
                      id={`tab-${i}`}
                      role="tab"
                      tabIndex={activeTabId === i ? "0" : "-1"}
                    >
                      <span>{company}</span>
                    </button>
                  </li>
                )
              })}
          </ul>

          {jobsData &&
            jobsData.map(({ title, url, company, range }, i) => {
              return (
                <div
                  className="styled-tab-content"
                  id={`panel-${i}`}
                  hidden={activeTabId !== i}
                >
                  <h3>
                    <span>{title}</span>
                    <span className="company">
                      &nbsp;@&nbsp;
                      <a href={url} className="inline-link">
                        {company}
                      </a>
                    </span>
                  </h3>

                  <p className="range">{range}</p>
                  <p className="job-description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default withStyle(Experiences)
