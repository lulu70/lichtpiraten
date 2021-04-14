import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

function SEO({ description, image, location, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const siteMetadata = data.site.siteMetadata
        const metaDescription = description || siteMetadata.description
        const metaImage = image || siteMetadata.image
        const metaImageWidth = 1200
        const metaImageHeight = 630

        const metaUrl = location
          ? siteMetadata.siteUrl + location.pathname
          : siteMetadata.siteUrl
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${siteMetadata.title}`}
            meta={[
              {
                name: `url`,
                content: metaUrl,
              },
              {
                name: `description`,
                content: metaDescription,
              },
              {
                name: `image`,
                content: metaImage,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:image`,
                content: metaImage,
              },
              {
                property: `og:image:width`,
                content: metaImageWidth,
              },
              {
                property: `og:image:height`,
                content: metaImageHeight,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
        image
      }
    }
  }
`
