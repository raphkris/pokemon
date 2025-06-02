export * from './endpoints/berries/types'
export * from './endpoints/contests/types'
export * from './endpoints/encounters/types'
export * from './endpoints/evolution/types'
export * from './endpoints/games/types'
export * from './endpoints/items/types'
export * from './endpoints/locations/types'
export * from './endpoints/machines/types'
export * from './endpoints/machines/types'
export * from './endpoints/pokemon/types'
export * from './endpoints/utility/types'

export interface ApiResource {
  url: string
}

export interface Description {
  description: string
  language: NamedApiResource
}

export interface Effect {
  effect: string
  language: NamedApiResource
}

export interface Encounter {
  min_level: number
  max_level: number
  condition_values: NamedApiResource[]
  chance: number
  method: NamedApiResource
}

export interface FlavorText {
  flavor_text: string
  language: NamedApiResource
  version: NamedApiResource
}

export interface GenerationGameIndex {
  game_index: number
  generation: NamedApiResource
}

export interface MachineVersionDetail {
  machine: ApiResource
  version_group: NamedApiResource
}

export interface Name {
  name: string
  language: NamedApiResource
}

export interface NamedApiResource extends ApiResource {
  name: string
}

export interface VerboseEffect {
  effect: string
  short_effect: string
  language: NamedApiResource
}

export interface VersionEncounterDetail {
  version: NamedApiResource
  max_chance: number
  encounter_details: Encounter[]
}

export interface VersionGameIndex {
  game_index: number
  version: NamedApiResource
}

export interface VersionGroupFlavorText {
  text: string
  language: NamedApiResource
  version_group: NamedApiResource
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
