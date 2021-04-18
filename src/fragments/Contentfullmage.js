import { graphql } from "gatsby"

export const fragment = graphql`
  fragment ContentfulImage on ContentfulAsset {
    id
    title
    description
    file {
      url
    }
    localFile {
      ...NewGatsbyImage
    }
  }
`
