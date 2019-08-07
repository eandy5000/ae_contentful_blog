interface PublisherDescription {
  publisherDescription: string
}

interface PublisherNode {
  id: string
  createdAt: string
  name: string
  homeUrl: string
  homeCountry: string
  publisherDescription: PublisherDescription
}

export interface ContentfulStoryNode {
  id: string
  createdAt: Date
  hasVideo: boolean
  name: string
  tags: string[]
  url: string
  publisher: PublisherNode
}
