import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StoriesList from "../components/indexPage/stories-list"
import { ContentfulStoryNode } from "../models/interfaces"
import { pageStartSlice, pageEndSlice } from "../utilities/helper"

const ThirdPage = ({ data }: any): JSX.Element => {
  const pageNumber = 3

  const stories = data.allContentfulStory.edges
    .map(
      (edge: any) =>
        ({
          ...edge.node,
          createdAt: new Date(edge.node.createdAt),
        } as ContentfulStoryNode)
    )
    .sort(
      (storyA: ContentfulStoryNode, storyB: ContentfulStoryNode) =>
        storyB.createdAt.getTime() - storyA.createdAt.getTime()
    )
    .slice(pageStartSlice(pageNumber), pageEndSlice(pageNumber))

  return (
    <Layout>
      <SEO title="Home" stories={stories} />
      <StoriesList stories={stories} />
      <Link style={{ marginRight: "1rem" }} to="/page-2">
        previous page
      </Link>
      <Link to="/page-4">next page</Link>
    </Layout>
  )
}

export default ThirdPage
export const query = graphql`
  query thirdPageStories {
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
