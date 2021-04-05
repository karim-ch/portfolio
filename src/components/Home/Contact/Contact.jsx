import React from "react"

import withStyle from "./withStyle"

const Contact = ({ className }) => {
  return (
    <section className={className}>
      <h2 className="heading">Get In Touch</h2>
      <div className="contact">
        <p>
          Although I'm not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question, want to collaborate or
          just want to meet me, I'll get back to you ASAP!
        </p>
        <a
          href="mailto:chaari.karim.plus@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <button className="contact-btn">Say Hi!</button>
        </a>
      </div>
    </section>
  )
}

export default withStyle(Contact)
