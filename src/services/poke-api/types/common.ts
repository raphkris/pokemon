export type ApiResource = {
  url: string
}

export type Description = {
  description: string
  language: NamedApiResource
}

export type Effect = {
  effect: string
  language: NamedApiResource
}

export type Encounter = {
  min_level: number
  max_level: number
  condition_values: NamedApiResource[]
  chance: number
  method: NamedApiResource
}

export type FlavorText = {
  flavor_text: string
  language: NamedApiResource
  version: NamedApiResource
}

export type GenerationGameIndex = {
  game_index: number
  generation: NamedApiResource
}

export type MachineVersionDetail = {
  machine: ApiResource
  version_group: NamedApiResource
}

export type Name = {
  name: string
  language: NamedApiResource
}

export type NamedApiResource = ApiResource & {
  name: string
}

export type VerboseEffect = {
  effect: string
  short_effect: string
  language: NamedApiResource
}

export type VersionEncounterDetail = {
  version: NamedApiResource
  max_chance: number
  encounter_details: Encounter[]
}

export type VersionGameIndex = {
  game_index: number
  version: NamedApiResource
}

export type VersionGroupFlavorText = {
  text: string
  language: NamedApiResource
  version_group: NamedApiResource
}

export type ResourceListBase = {
  count: number
  next?: string
  previous?: string
}

export type NamedApiResourceList<T extends ResourceListBase = ResourceListBase> = {
  results?: T[]
}

export type ApiResourceList<T extends ResourceListBase = ResourceListBase> = {
  results?: T[]
}
