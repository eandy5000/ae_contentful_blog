class Story {
  private pCreatedAt!: string
  private pHasVideo!: boolean
  private pId!: string
  private pName!: string
  private pTags!: string[]
  private pUrl!: string

  constructor(
    createdAt: string,
    hasVideo: boolean,
    id: string,
    name: string,
    tags: string[],
    url: string
  ) {
    this.setId(id)
    this.setCreatedAt(createdAt)
    this.setHasVideo(hasVideo)
    this.setName(name)
    this.setTags(tags)
    this.setUrl(url)
  }

  public getId(): string {
    return this.pId
  }
  public setId(newId: string): void {
    this.pId = newId
  }

  public getCreatedAt(): string {
    return this.pCreatedAt
  }
  public setCreatedAt(reatedAt: string): void {
    this.pCreatedAt = reatedAt
  }

  public getHasVideo(): boolean {
    return this.pHasVideo
  }
  public setHasVideo(hasVideo: boolean): void {
    this.pHasVideo = hasVideo
  }

  public getName(): string {
    return this.pName
  }
  public setName(name: string): void {
    this.pName = name
  }

  public getTags(): string[] {
    return this.pTags
  }
  public setTags(tags: string[]): void {
    this.pTags = tags
  }

  public getUrl(): string {
    return this.pUrl
  }
  public setUrl(url: string): void {
    this.pUrl = url
  }
}

export default Story
