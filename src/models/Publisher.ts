interface PublisherProps {
  id: string
  createdAt: string
  name: string
  homeUrl: string
  homeCountry: string
  publisherDescription: string
}

class Publisher {
  private pData!: PublisherProps

  constructor(data: PublisherProps) {
    this.setDataProps(data)
  }

  public setDataProps(props: PublisherProps) {
    this.pData = props
  }

  public getData(): PublisherProps {
    return this.pData
  }
}

export default Publisher
