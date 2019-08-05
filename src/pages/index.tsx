import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StoriesList from "../components/indexPage/stories-list"
import { ContentfulStoryNode } from "../models/interfaces"

const IndexPage = ({ data }: any): JSX.Element => {
  const stories = data.allContentfulStory.edges.map(
    (i: any) => i.node as ContentfulStoryNode
  )
  return (
    <Layout>
      <SEO title="Home" />
      <StoriesList stories={stories} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
export const query = graphql`
  query getAllStories {
    allContentfulStory {
      edges {
        node {
          id
          name
          hasVideo
          tags
          url
          createdAt
          publisher {
            id
            name
            createdAt
            homeUrl
            homeCountry
            publisherDescription {
              publisherDescription
            }
          }
        }
      }
    }
  }
`
