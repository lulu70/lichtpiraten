import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SizeWrapper from "../../reusables/SizeWrapper"
import { gsap, Linear } from "gsap"

const Hero = ({ data }) => {
  const imageContainerRef = React.useRef()
  function spin() {
    gsap
      .timeline({
        defaults: {
          duration: 0.2,
          ease: Linear.easeInOut,
        },
      })
      .to(imageContainerRef.current, {
        rotate: 360,
      })
      .to(imageContainerRef.current, {
        rotate: 0,
      })
  }
  return (
    <section id="hero" className="relative">
      <SizeWrapper className="my-96">
        <div ref={imageContainerRef}>
          <GatsbyImage
            image={getImage(data.yellowDuck)}
            className="mx-auto block w-36"
            alt="yellow-duck"
            onPointerEnter={spin}
          />
        </div>
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
