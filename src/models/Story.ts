import Publisher from "./Publisher"

interface StoryProps {
  id: string
  createdAt: string
  hasVideo: boolean
  name: string
  tags: string[]
  url: string
  publisher: Publisher
}

class Story {
  private pData!: StoryProps

  constructor(data: StoryProps) {
    this.setDataProps(data)
  }

  public setDataProps(props: StoryProps) {
    this.pData = props
  }

  public getData(): StoryProps {
    return this.pData
  }
}

export default Story
