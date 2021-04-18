import { graphql } from "gatsby"

export const fragment = graphql`
  fragment NewGatsbyImage_16_9 on File {
    id
    name
    publicURL
    childImageSharp {
      gatsbyImageData(
        placeholder: NONE
        aspectRatio: 1.7777
        formats: [AUTO, WEBP, AVIF]
      )
      original {
        src
      }
    }
  }
`
