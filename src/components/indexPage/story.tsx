import * as React from "react"
import { ContentfulStoryNode } from "../../models/interfaces"
import Pill from "../../components/shared/pill"
import { getMonth } from "date-fns"
import { monthText } from "../../utilities/helper"

interface Props {
  story: ContentfulStoryNode
}

const Story = ({ story }: Props) => {
  const { name, tags, hasVideo, url, createdAt, publisher } = story
  const hasVideoPill = false === hasVideo ? null : <Pill text={`has video`} />
  const dateText = `${monthText(
    getMonth(createdAt)
  )}-${createdAt.getDate()} ${createdAt.getFullYear()}`

  return (
    <div className={"story__border"}>
      <div className={"story__name"}>{name}</div>
      <div className={"story__date"}>{dateText}</div>
      <div className={"story__storyLink"}>
        <a href={url} target="_blank">
          {`see story details at ${publisher.displayName}`}
        </a>
      </div>
      <div className={"story__tags"}>
        <Pill text={publisher.homeCountry} />
        {hasVideoPill}
        {tags.map((tag, index) => (
          <Pill key={index} text={tag} />
        ))}
      </div>
    </div>
  )
}

export default Story
