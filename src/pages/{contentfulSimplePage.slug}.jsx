import React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"

import SEO from "../components/reusables/seo"
import Layout from "../components/reusables/Layout"
import Container from "../components/reusables/Container"
import Divider from "../components/reusables/Divider"
import addLineBreaks from "../helpers/addLineBreaks"

const SimplePageTemplate = ({ data }) => {
  const { title, body } = data.page

  const richTextOptions = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          className="text-accent"
          href={node.data.uri}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="text-5xl lg:text-7xl text-center font-bold text-white">
          {children}
        </h1>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <p className="text-lg">{children}</p>
      ),
    },
    renderText: addLineBreaks,
  }
  return (
    <>
      <SEO title={title} />
      <Layout>
        <section id="main">
          <Container className="py-12 font-light text-gray-300">
            <p className="text-center text-xl">{title}</p>
            <Divider />
            <div className="mt-12 space-y-8">
              {renderRichText(body, richTextOptions)}
            </div>
          </Container>
        </section>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    page: contentfulSimplePage(id: { eq: $id }) {
      title
      body {
        raw
      }
    }
  }
`

export default SimplePageTemplate
