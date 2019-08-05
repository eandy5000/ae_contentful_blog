import * as React from "react"
import { ContentfulStoryNode } from "../../models/interfaces"

interface Props {
  stories: ContentfulStoryNode[]
}

const StoriesList = ({ stories }: Props) => {
  console.log("stories", stories)
  return (
    <div>
      <div> hi there</div>
    </div>
  )
}

export default StoriesList
