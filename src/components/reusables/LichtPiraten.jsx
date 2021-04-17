import React from "react"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import { getImage } from "gatsby-plugin-image"
import Container from "./Container"

const LichtPiraten = ({ data }) => {
  const image = getImage(data.waterBG)
  const bgImage = convertToBgImage(image)
  return (
    <section id="LichtPiraten">
      <BackgroundImage
        className="py-36 text-xl font-light relative text-center bg-fixed"
        {...bgImage}
      >
        <Container>@LICHTPIRATEN</Container>
      </BackgroundImage>
    </section>
  )
}

export default LichtPiraten
