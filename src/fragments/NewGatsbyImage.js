import { graphql } from "gatsby"

export const fragment = graphql`
  fragment NewGatsbyImage on File {
    id
    name
    publicURL
    childImageSharp {
      gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP, AVIF])
      original {
        src
      }
    }
  }
`
