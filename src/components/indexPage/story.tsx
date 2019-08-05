import * as React from "react"
import { ContentfulStoryNode } from "../../models/interfaces"

interface Props {
  story: ContentfulStoryNode
}

const Story = ({ story }: Props) => {
  console.log("story", story)
  const { name, tags, hasVideo, url } = story
  return (
    <div>
      <div>name: {name}</div>
      <div>has video: {hasVideo}</div>
      <a href={url} target="_blank">
        link
      </a>
      <div>
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default Story
