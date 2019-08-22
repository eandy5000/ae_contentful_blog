import * as React from "react"
import { ContentfulFeatureNode } from "../../models/interfaces"
import { stringToParagraph, formatDateText } from "../../utilities/helper"
import Pill from "../shared/pill"

interface Props {
  feature: ContentfulFeatureNode
}

const Feature = ({ feature }: Props) => {
  const description = stringToParagraph(feature.description.description)
  const dateText = formatDateText(feature.createdAt)

  const descriptionParagraphs = (paragraphs: string[]) => {
    return paragraphs.map((paragraph, index: number) => (
      <div key={index}>{paragraph}</div>
    ))
  }

  const featureStories = feature.stories.map((story, index) => (
    <div key={story.id} style={{ marginBottom: "0.6rem" }}>
      <div>
        <div>
          {`${index + 1}: `}
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
      <div className={"feature__date"}>{dateText}</div>
      <div className={"feature__description"}>
        {descriptionParagraphs(description)}
      </div>
      <div className={"feature__articleHeader"}>Articles</div>
      <div>{featureStories}</div>
    </div>
  )
}

export default Feature
