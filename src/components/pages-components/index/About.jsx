import React from "react"
import { getImage } from "gatsby-plugin-image"
import Container from "../../reusables/Container"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
import useTabIsUsed from "../../../hooks/useTabIsUsed"
import getClassNamesByTabIsUsedState from "../../../helpers/getClassNamesByTabIsUsedState"

const About = ({ data }) => {
  const tabIsUsed = useTabIsUsed()
  const image = getImage(data.aboutBG)
  const bgImage = convertToBgImage(image)
  return (
    <section id="about">
      <BackgroundImage
        className="relative text-right text-gray-400 py-12 text-xl font-light bg-fixed bg-right-top"
        {...bgImage}
      >
        <Container className="relative">
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
            <Link
              to="/manifesto/"
              className={`${getClassNamesByTabIsUsedState(tabIsUsed)}`}
            >
              Manifesto
            </Link>
            <Link
              to="/network/"
              className={`${getClassNamesByTabIsUsedState(tabIsUsed)}`}
            >
              Network
            </Link>
          </div>
        </Container>
      </BackgroundImage>
    </section>
  )
}

export default About
