import React from "react"
import { getImage } from "gatsby-plugin-image"
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
          className={`text-accent ${getClassNamesByTabIsUsedState(tabIsUsed)}`}
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
        className="relative text-right text-gray-400 py-12 text-xl font-light bg-fixed bg-right-top"
      >
        <Container className="relative">
          <h2>{title}</h2>
          <div className="max-w-3xl ml-auto text-white mt-4 space-y-2">
            {renderRichText(body, richTextOptions)}
          </div>
        </Container>
      </BackgroundImage>
    </section>
  )
}

export default About
