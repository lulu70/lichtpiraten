import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useLocation } from "@reach/router"
import Container from "./Container"

const Footer = () => {
  const { yellowDuck } = useStaticQuery(
    graphql`
      {
        yellowDuck: file(name: { eq: "yellow-duck" }) {
          ...NewGatsbyImage
        }
      }
    `
  )
  const location = useLocation()
  const messages = {
    "/": (
      <p className="text-xs mt-4">
        This website uses cookies. You can read more on our{" "}
        <Link to="/imprint/" className="text-accent">
          imprint
        </Link>{" "}
        or our{" "}
        <Link to="/privacy/" className="text-accent">
          privacy statement
        </Link>
      </p>
    ),
    "/privacy/": (
      <p className="text-xs mt-4">
        This website uses cookies. You are reading our privacy statement, go
        back{" "}
        <Link to="/" className="text-accent">
          here
        </Link>{" "}
      </p>
    ),
    "/imprint/": (
      <p className="text-xs mt-4">
        This website uses cookies. You are reading our imprint, go back{" "}
        <Link to="/" className="text-accent">
          here
        </Link>{" "}
      </p>
    ),
    "/manifesto/": (
      <p className="text-xs mt-4">
        This website uses cookies. You are reading our manifesto, go back{" "}
        <Link to="/" className="text-accent">
          here
        </Link>{" "}
      </p>
    ),
    "/network/": (
      <p className="text-xs mt-4">
        This website uses cookies. You are reading our network, go back{" "}
        <Link to="/" className="text-accent">
          here
        </Link>{" "}
      </p>
    ),
  }
  return (
    <footer className="mt-auto pb-5 relative bg-black py-8 text-center text-gray-300">
      <Container>
        <div className="flex items-center">
          <div className="w-5/12 border-t border-gray-300" />
          <div className="w-2/12 flex">
            <GatsbyImage
              image={getImage(yellowDuck)}
              alt={yellowDuck.name}
              className="w-7 mx-auto"
            />
          </div>
          <div className="w-5/12 border-t border-gray-300" />
        </div>
        {messages[location.pathname]}
      </Container>
    </footer>
  )
}

export default Footer
