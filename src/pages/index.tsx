import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StoriesList from "../components/indexPage/stories-list"
import { ContentfulStoryNode } from "../models/interfaces"
import { pageStartSlice, pageEndSlice } from "../utilities/helper"
import { storiesConstants } from "../config/uiCopyConstants"
import { PageRoutes } from "../config/routes"

const IndexPage = ({ data }: any): JSX.Element => {
  const pageNumber = 1
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
      <SEO title="Stories" stories={stories} />
      <StoriesList stories={stories} />
      <Link to={PageRoutes.STORIES_PAGE_2}>
        {storiesConstants.LINK_STORIES_2_TEXT}
      </Link>
    </Layout>
  )
}

export default IndexPage
export const query = graphql`
  query indexPageStories {
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
            displayName
            publisherDescription {
              publisherDescription
            }
          }
        }
      }
    }
  }
`
