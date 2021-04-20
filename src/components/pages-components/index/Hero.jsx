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
      <Container className="my-12 lg:my-96 text-center lg:text-right">
        <div
          ref={imageContainerRef}
          className="mx-auto w-36 relative"
          onPointerEnter={spin}
        >
          <GatsbyImage
            image={getImage(heroSection.icon.localFile)}
            alt={heroSection.icon.title}
          />
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold mt-12 block">
          {heroSection.title}
        </h1>
        <p className="mt-4 text-xl font-light">{heroSection.subtitle}</p>
      </Container>
    </section>
  )
}

export default Hero
