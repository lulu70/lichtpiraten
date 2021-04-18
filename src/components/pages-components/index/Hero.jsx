import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Container from "../../reusables/Container"
import { gsap, Linear } from "gsap"

const Hero = ({ data }) => {
  const { heroSection } = data
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
      <Container className="my-96">
        <div ref={imageContainerRef}>
          <GatsbyImage
            image={getImage(heroSection.icon.localFile)}
            alt={heroSection.icon.title}
            className="mx-auto block w-36"
            onPointerEnter={spin}
          />
        </div>
        <h1 className="text-7xl text-right font-bold mt-12 block">
          {heroSection.title}
        </h1>
        <p className="text-right mt-4 text-xl font-light">
          {heroSection.subtitle}
        </p>
      </Container>
    </section>
  )
}

export default Hero
