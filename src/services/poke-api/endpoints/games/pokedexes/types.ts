import type { Description, Name, NamedApiResource } from '@/services/poke-api/types'

export type Pokedex = {
  id: number
  name: string
  is_main_series: boolean
  descriptions: Description[]
  names: Name[]
  pokemon_entries: PokemonEntry[]
  region: NamedApiResource
  version_groups: NamedApiResource[]
}

export type PokemonEntry = {
  entry_number: number
  pokemon_species: NamedApiResource
}
