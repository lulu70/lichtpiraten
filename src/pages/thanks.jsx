import React from "react"
import Layout from "../components/reusables/Layout"
import SEO from "../components/reusables/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SizeWrapper from "../components/reusables/SizeWrapper"
import { graphql, Link } from "gatsby"

export default function Home({ data }) {
  return (
    <>
      <SEO title="Thanks" />
      <Layout>
        <GatsbyImage
          id="bg-image"
          image={getImage(data.duckOnBuilding)}
          alt="duck-on-building"
          className="w-full fixed inset-0"
          objectFit="cover"
          objectPosition="left"
        />
        <SizeWrapper className="relative text-center font-light">
          <h1 className="mt-24 text-6xl">Thanks For Contacting Us</h1>
          <Link className="mt-8 inline-block text-xl " to="/">
            Go back to homepage
          </Link>
        </SizeWrapper>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    duckOnBuilding: file(name: { eq: "duck-on-building" }) {
      ...NewGatsbyImage
    }
  }
`
