import React from "react"
import Layout from "../components/reusables/Layout"
import SEO from "../components/reusables/seo"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Hero from "../components/pages-components/index/Hero"
import Artwork from "../components/pages-components/index/Artwork"
import About from "../components/pages-components/index/About"

export default function Home({ data }) {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <GatsbyImage
          id="bg-image"
          image={getImage(data.duckOnBuilding)}
          alt="duck-on-building"
          className="w-full fixed inset-0"
          objectFit="cover"
          objectPosition="left"
        />
        <Hero data={data} />
        <Artwork data={data} />
        <About data={data} />
        zz
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    yellowDuck: file(name: { eq: "yellow-duck" }) {
      ...NewGatsbyImage
    }
    duckOnBuilding: file(name: { eq: "duck-on-building" }) {
      ...NewGatsbyImage
    }
    thumbOverlay: file(name: { eq: "thumb_overlay" }) {
      ...NewGatsbyImage
    }
    katerHolzig: file(name: { eq: "kater-holzig" }) {
      ...NewGatsbyImage
    }
    teufelsbergFulldomeShow: file(name: { eq: "teufelsberg-fulldome-show" }) {
      ...NewGatsbyImage
    }
    verzauberung: file(name: { eq: "verzauberung" }) {
      ...NewGatsbyImage
    }
    furImmerImNebel: file(name: { eq: "für-immer-im-nebel" }) {
      ...NewGatsbyImage
    }
    random30C3Hamburg2013: file(name: { eq: "random-30c3-hamburg-2013" }) {
      ...NewGatsbyImage
    }
    timeMachine: file(name: { eq: "time-machine" }) {
      ...NewGatsbyImage
    }
    aboutBG: file(name: { eq: "about-bg" }) {
      ...NewGatsbyImage
    }
  }
`
