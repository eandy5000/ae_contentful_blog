import * as React from "react"
import { ContentfulFeatureNode } from "../../models/interfaces"
import { stringToParagraph } from "../../utilities/helper"
import Pill from "../shared/pill"

interface Props {
  feature: ContentfulFeatureNode
}

const Feature = ({ feature }: Props) => {
  const description = stringToParagraph(feature.description.description)

  const descriptionParagraphs = (paragraphs: string[]) => {
    return paragraphs.map((paragraph, index: number) => (
      <div key={index}>{paragraph}</div>
    ))
  }

  const featureStories = feature.stories.map(story => (
    <div key={story.id} style={{ marginBottom: "0.6rem" }}>
      <div>
        <div>
          <a href={story.url}>{story.name}</a>
        </div>
        <div>
          <Pill text={story.publisher.homeCountry} />
          <Pill text={story.publisher.displayName} />
        </div>
      </div>
    </div>
  ))

  return (
    <div className={"feature__border"}>
      <div className={"feature__title"}>{feature.title}</div>
      <div className={"feature__description"}>
        {descriptionParagraphs(description)}
      </div>
      <div>Articles</div>
      <div>{featureStories}</div>
    </div>
  )
}

export default Feature
