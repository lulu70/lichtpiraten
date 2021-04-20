import React from "react"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Container from "./Container"

const LichtPiraten = ({ data }) => {
  const { text, backgroundImage } = data.lichtpiratenSection
  const image = getImage(backgroundImage.localFile)
  const bgImage = convertToBgImage(image)
  return (
    <section id="LichtPiraten">
      <BackgroundImage
        className="text-xl font-light relative text-center bg-fixed"
        {...bgImage}
      >
        {/* mobile only image */}
        <div className="absolute inset-0 lg:hidden">
          <GatsbyImage
            image={image}
            alt={backgroundImage.title}
            className="h-full"
          />
        </div>
        {/* mobile only image */}

        <Container className="relative py-36">
          <span className="bg-black bg-opacity-80 p-2">{text}</span>
        </Container>
      </BackgroundImage>
    </section>
  )
}

export default LichtPiraten
