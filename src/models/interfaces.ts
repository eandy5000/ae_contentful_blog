export interface IStory {
  createdAt: string
  hasVideo: boolean
  id: string
  name: string
  tags: string[]
  url: string
  publisher: IPublisher
}

export interface IPublisher {
  id: string
  name: string
  createdAt: string
  homeUrl: string
  homeCountry: string
  publisherDescription: string
}
