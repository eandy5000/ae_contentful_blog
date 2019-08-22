import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { ContentfulFeatureNode } from "../models/interfaces"
import FeatureList from "../components/featurePage/feature-list"

const FirstFeaturesPage = ({ data }: any): JSX.Element => {
  const features = data.allContentfulFeature.edges
    .map(
      (edge: any) =>
        ({
          ...edge.node,
          createdAt: new Date(edge.node.createdAt),
        } as ContentfulFeatureNode)
    )
    .sort(
      (featureA: ContentfulFeatureNode, featureB: ContentfulFeatureNode) =>
        featureB.createdAt.getTime() - featureA.createdAt.getTime()
    )

  console.log("features", features)

  return (
    <Layout>
      <SEO title="Features" />
      <div>features</div>
      <FeatureList features={features} />
    </Layout>
  )
}

export default FirstFeaturesPage

export const query = graphql`
  query getAllFeatures {
    allContentfulFeature {
      edges {
        node {
          id
          createdAt
          title
          description {
            description
          }
          stories {
            id
            name
            url
            createdAt
            publisher {
              displayName
              homeUrl
              homeCountry
            }
          }
        }
      }
    }
  }
`
