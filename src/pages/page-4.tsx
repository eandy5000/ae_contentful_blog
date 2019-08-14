import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StoriesList from "../components/indexPage/stories-list"
import { ContentfulStoryNode } from "../models/interfaces"
import { pageStartSlice, pageEndSlice } from "../utilities/helper"

const FourthPage = ({ data }: any): JSX.Element => {
  const pageNumber = 4
  console.log("4th", pageStartSlice(pageNumber), pageEndSlice(pageNumber))
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
  console.log("foo", stories)

  return (
    <Layout>
      <SEO title="Home" stories={stories} />
      <StoriesList stories={stories} />
      <Link style={{ marginRight: "1rem" }} to="/page-3">
        previous page
      </Link>
      <Link to="/page-5">next page</Link>
    </Layout>
  )
}

export default FourthPage
export const query = graphql`
  query fourthPageStories {
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
