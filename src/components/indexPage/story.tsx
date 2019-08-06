import * as React from "react"
import { ContentfulStoryNode } from "../../models/interfaces"
import Pill from "../../components/shared/pill"

interface Props {
  story: ContentfulStoryNode
}

const Story = ({ story }: Props) => {
  console.log("story", story)
  const { name, tags, hasVideo, url } = story
  const hasVideoPill = false === hasVideo ? null : <Pill text={`See Video`} />

  return (
    <div className={"story__border"}>
      <div className={"story__name"}>{name}</div>
      <div className={"story__hasVideo"}>{hasVideoPill}</div>
      <div className={"story__storyLink"}>
        <a href={url} target="_blank">
          see story details
        </a>
      </div>
      <div className={"story__tags"}>
        {tags.map((tag, index) => (
          <Pill key={index} text={tag} />
        ))}
      </div>
    </div>
  )
}

export default Story
