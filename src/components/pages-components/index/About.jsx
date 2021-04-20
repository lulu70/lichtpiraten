import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES } from "@contentful/rich-text-types"
import Container from "../../reusables/Container"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
import useTabIsUsed from "../../../hooks/useTabIsUsed"
import getClassNamesByTabIsUsedState from "../../../helpers/getClassNamesByTabIsUsedState"
import addLineBreaks from "../../../helpers/addLineBreaks"

const About = ({ data }) => {
  const tabIsUsed = useTabIsUsed()
  const { title, body, backgroundImage } = data.aboutSection
  const image = getImage(backgroundImage.localFile)
  const bgImage = convertToBgImage(image)
  const richTextOptions = {
    renderText: addLineBreaks,
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => (
        <Link
          to={node.data.uri}
          className={`text-accent inline-block mt-2 ${getClassNamesByTabIsUsedState(
            tabIsUsed
          )}`}
        >
          {children}
        </Link>
      ),
    },
  }
  return (
    <section id="about">
      <BackgroundImage
        {...bgImage}
        className="relative text-right text-gray-300 py-12 text-xl font-light bg-fixed bg-right-top"
      >
        {/* mobile only image */}
        <div className="absolute inset-0 lg:hidden">
          <GatsbyImage
            image={image}
            alt={backgroundImage.title}
            className="h-full"
          />
        </div>
        {/* mobile only image */}

        <Container className="relative">
          <h2>{title}</h2>
          <div className="max-w-3xl ml-auto text-white mt-4 space-y-4">
            {renderRichText(body, richTextOptions)}
          </div>
        </Container>
      </BackgroundImage>
    </section>
  )
}

export default About
