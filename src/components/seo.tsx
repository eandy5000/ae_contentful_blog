/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { ContentfulStoryNode } from "../models/interfaces"

interface MetaTag {
  name: string
  content: any
}

interface Props {
  description: string
  lang: string
  meta: MetaTag[]
  title: string
  stories: ContentfulStoryNode[]
}

function SEO({ description, lang, meta, title, stories }: Props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const topStoriesText = () => {
    if (stories) {
      return stories
        .map((story, index) => `Story ${index + 1}: ${story.name}.`)
        .join(" ")
    } else {
      return ""
    }
  }

  const seoDescriptionText = `${metaDescription} ${topStoriesText}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: seoDescriptionText,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: seoDescriptionText,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: seoDescriptionText,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO
