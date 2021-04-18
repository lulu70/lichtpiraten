import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Container from "../../reusables/Container"
import Divider from "../../reusables/Divider"
import ContactForm from "../../reusables/ContactForm"
import Social from "../../reusables/Social"

const Contact = ({ data }) => {
  const { title, subtitle, cta, backgroundImage } = data.contactSection
  return (
    <section id="contact" className="relative bg-black">
      <GatsbyImage
        image={getImage(backgroundImage.localFile)}
        alt={backgroundImage.title}
        className="absolute inset-0 opacity-50"
        objectPosition="top"
      />
      <Container className="relative py-12 text-center">
        <h2 className="text-xl text-gray-400 font-light">{title}</h2>
        <Divider />
        <h3 className="font-bold text-7xl mt-8">{cta}</h3>
        <p className="text-xl font-light max-w-4xl mx-auto mt-4">{subtitle}</p>
        <div className="mt-12 text-left flex flex-col lg:flex-row">
          <div className="w-full lg:w-7/12">
            <ContactForm className="text-black max-w-xl" />
          </div>
          <div className="w-full lg:w-5/12 mt-8 lg:mt-0">
            <Social />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
