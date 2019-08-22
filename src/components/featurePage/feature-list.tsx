import * as React from "react"
import { ContentfulFeatureNode } from "../../models/interfaces"
import Feature from "./feature"

interface Props {
  features: ContentfulFeatureNode[]
}

const FeatureList = ({ features }: Props) => {
  const featureComponents = features.map(feature => (
    <Feature key={feature.id} feature={feature} />
  ))

  return <div>{featureComponents}</div>
}

export default FeatureList
