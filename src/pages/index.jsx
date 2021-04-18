import React from "react"
import Layout from "../components/reusables/Layout"
import SEO from "../components/reusables/seo"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Hero from "../components/pages-components/index/Hero"
import Artwork from "../components/pages-components/index/Artwork"
import About from "../components/pages-components/index/About"
import LichtPiraten from "../components/reusables/LichtPiraten"
import Contact from "../components/pages-components/index/Contact"

export default function Home({ data }) {
  const { bgImage } = data
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <GatsbyImage
          id="bg-image"
          image={getImage(bgImage.image.localFile)}
          alt={bgImage.image.title}
          className="w-full fixed inset-0"
          objectFit="cover"
          objectPosition="left"
        />
        <Hero data={data} />
        <Artwork data={data} />
        <About data={data} />
        <LichtPiraten data={data} />
        <Contact data={data} />
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    bgImage: contentfulBackgroundImage {
      title
      image {
        ...ContentfulImage
      }
    }
    heroSection: contentfulHeroSection {
      title
      subtitle
      icon {
        ...ContentfulImage
      }
    }
    artworksSection: contentfulArtworksSection {
      title
      subtitle
      overlayImage {
        ...ContentfulImage
      }
      images {
        ...ContentfulImage
      }
    }
    aboutSection: contentfulAboutSection {
      title
      body {
        raw
      }
      backgroundImage {
        ...ContentfulImage
      }
    }
    lichtpiratenSection: contentfulLichtpiratenSection {
      text
      backgroundImage {
        ...ContentfulImage
      }
    }
    contactSection: contentfulContactSection {
      subtitle
      title
      cta
      backgroundImage {
        ...ContentfulImage
      }
    }
  }
`
