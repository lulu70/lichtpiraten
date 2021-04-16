import React from "react"
import { getImage } from "gatsby-plugin-image"
import SizeWrapper from "../../reusables/SizeWrapper"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"

const About = ({ data }) => {
  const image = getImage(data.aboutBG)
  const bgImage = convertToBgImage(image)
  return (
    <section id="about">
      <BackgroundImage
        className="relative text-right text-gray-400 py-12 text-xl font-light bg-fixed bg-right-top"
        {...bgImage}
      >
        <SizeWrapper className="relative">
          <h2>ABOUT</h2>
          <p className="max-w-4xl ml-auto text-white mt-4">
            welcome into the world of shadow and light we create new rooms,
            imagine other dimensions and find ways out_let´s inspire, discover
            and astonish_The artistic group is merging visual techniques into
            new forms of expression and sensual feelings with the support of
            sounds_ With the LiCHTPiRATEN reality is not always what it seems to
            be
          </p>
          <div className="text-accent flex flex-col items-end mt-2">
            <Link to="/manifesto/">Manifesto</Link>
            <Link to="/network/">Network</Link>
          </div>
        </SizeWrapper>
      </BackgroundImage>
    </section>
  )
}

export default About
