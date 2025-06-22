import type {
  ApiResource,
  Description,
  FlavorText,
  Name,
  NamedApiResource
} from '../../../types/common'

export type PokemonSpecies = {
  id: number
  name: string
  order: number
  gender_rate: number
  capture_rate: number
  base_happiness: number
  is_baby: boolean
  is_legendary: boolean
  is_mythical: boolean
  hatch_counter: number
  has_gender_differences: boolean
  forms_switchable: boolean
  growth_rate: NamedApiResource
  pokedex_numbers: PokemonSpeciesDexEntry[]
  egg_groups: NamedApiResource[]
  color: NamedApiResource
  shape: NamedApiResource
  evolves_from_species: NamedApiResource
  evolution_chain: ApiResource
  habitat: NamedApiResource
  generation: NamedApiResource
  names: Name[]
  pal_park_encounters: PalParkEncounterArea[]
  flavor_text_entries: FlavorText[]
  form_descriptions: Description[]
  genera: Genus[]
  varieties: PokemonSpeciesVariety[]
}

export type Genus = {
  genus: string
  language: NamedApiResource
}

export type PokemonSpeciesDexEntry = {
  entry_number: number
  pokedex: NamedApiResource
}

export type PalParkEncounterArea = {
  base_score: number
  rate: number
  area: NamedApiResource
}

export type PokemonSpeciesVariety = {
  is_default: boolean
  pokemon: NamedApiResource
}
