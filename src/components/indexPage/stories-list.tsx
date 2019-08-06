import * as React from "react"
import { ContentfulStoryNode } from "../../models/interfaces"
import Story from "./story"

interface Props {
  stories: ContentfulStoryNode[]
}

const StoriesList = ({ stories }: Props) => {
  return (
    <div>
      {stories.map(story => (
        <Story key={story.id} story={story} />
      ))}
    </div>
  )
}

export default StoriesList
