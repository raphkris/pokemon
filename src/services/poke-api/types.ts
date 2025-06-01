export * from './endpoints/berries/types'

export interface ApiResource {
  url: string
}

export interface NamedApiResource extends ApiResource {
  name: string
}

export interface ResourceListBase {
  count: number
  next?: string
  previous?: string
}

export interface NamedApiResourceList<
  NamedApiResource extends ResourceListBase | any = ResourceListBase
> {
  results?: NamedApiResource[]
}

export interface ApiResourceList<ApiResource extends ResourceListBase | any = ResourceListBase> {
  results?: ApiResource[]
}

export interface Name {
  name: string
  language: NamedApiResource
}
