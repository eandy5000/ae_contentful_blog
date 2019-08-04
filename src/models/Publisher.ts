class Publisher {
  private pCreatedAt!: string
  private pId!: string
  private pName!: string
  private pHomeUrl!: string
  private pHomeCountry!: string

  constructor(
    createdAt: string,
    id: string,
    name: string,
    homeUrl: string,
    homeCountry: string
  ) {
    this.setId(id)
    this.setCreatedAt(createdAt)
    this.setName(name)
    this.setHomeUrl(homeUrl)
    this.setHomeCountry(homeCountry)
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

  public getName(): string {
    return this.pName
  }
  public setName(name: string): void {
    this.pName = name
  }

  public getHomeUrl(): string {
    return this.pHomeUrl
  }
  public setHomeUrl(url: string): void {
    this.pHomeUrl = url
  }
  public getHomeCountry(): string {
    return this.pHomeCountry
  }
  public setHomeCountry(country: string): void {
    this.pHomeCountry = country
  }
}

export default Publisher
