import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SizeWrapper from "../../reusables/SizeWrapper"

const Hero = ({ data }) => {
  return (
    <section id="hero" className="relative">
      <SizeWrapper className="my-96">
        <GatsbyImage
          image={getImage(data.yellowDuck)}
          className="mx-auto block w-36"
          alt="yellow-duck"
        />
        <h1 className="text-7xl text-right font-bold mt-12 block">
          LiCHTPiRATEN
        </h1>
        <p className="text-right mt-4 text-xl font-light">
          # LiCHT MACHT LiEBE #
        </p>
      </SizeWrapper>
    </section>
  )
}

export default Hero
