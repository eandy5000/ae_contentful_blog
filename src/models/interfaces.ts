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
  displayName: string
}

interface FeatureDescription {
  description: string
}

interface FeatureStoryPublisher {
  displayName: string
  homeUrl: string
  homeCountry: string
}

interface FeatureStory {
  id: string
  name: string
  url: string
  createdAt: string
  publisher: FeatureStoryPublisher
}

export interface ContentfulFeatureNode {
  id: string
  createdAt: Date
  title: string
  description: FeatureDescription
  stories: FeatureStory[]
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
