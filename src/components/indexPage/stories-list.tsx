import * as React from "react"
import { ContentfulStoryNode } from "../../models/interfaces"
import Story from "./story"

interface Props {
  stories: ContentfulStoryNode[]
}

const StoriesList = ({ stories }: Props) => {
  const storyComponents = stories.map(story => (
    <Story key={story.id} story={story} />
  ))

  return <div>{storyComponents}</div>
}

export default StoriesList
