import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StoriesList from "../components/storyPage/stories-list"
import { ContentfulStoryNode } from "../models/interfaces"
import { pageStartSlice, pageEndSlice } from "../utilities/helper"
import { storiesConstants } from "../config/uiCopyConstants"
import { PageRoutes } from "../config/routes"

const SecondPage = ({ data }: any): JSX.Element => {
  const pageNumber = 2

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
      <Link className={"page__linkSpace"} to={PageRoutes.STORIES_PAGE_1}>
        {storiesConstants.LINK_STORIES_1_TEXT}
      </Link>
      <Link to={PageRoutes.STORIES_PAGE_3}>
        {storiesConstants.LINK_STORIES_3_TEXT}
      </Link>
    </Layout>
  )
}

export default SecondPage
export const query = graphql`
  query secondPageStories {
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
