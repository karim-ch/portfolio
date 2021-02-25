import React from "react"
import withStyle from "./withStyle"
import Prize from "./Components/Prize"

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

const Prizes = ({ className }) => {
  return (
    <section className={className}>
      <div className="projects-container">
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

export default withStyle(Prizes)
