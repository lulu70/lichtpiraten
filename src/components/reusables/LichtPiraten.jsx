import React from "react"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import { getImage } from "gatsby-plugin-image"
import Container from "./Container"

const LichtPiraten = ({ data }) => {
  const { text, backgroundImage } = data.lichtpiratenSection
  const image = getImage(backgroundImage.localFile)
  const bgImage = convertToBgImage(image)
  return (
    <section id="LichtPiraten">
      <BackgroundImage
        className="py-36 text-xl font-light relative text-center bg-fixed"
        {...bgImage}
      >
        <Container>{text}</Container>
      </BackgroundImage>
    </section>
  )
}

export default LichtPiraten
