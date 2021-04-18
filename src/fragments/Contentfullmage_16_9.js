import { graphql } from "gatsby"

export const fragment = graphql`
  fragment ContentfulImage_16_9 on ContentfulAsset {
    id
    title
    description
    file {
      url
    }
    localFile {
      ...NewGatsbyImage_16_9
    }
  }
`
