import type {
  Name,
  NamedApiResource,
  VersionEncounterDetail
} from '@/services/poke-api/types/common'

export type LocationArea = {
  id: number
  name: string
  game_index: number
  encounter_method_rates: EncounterMethodRate[]
  location: NamedApiResource
  names: Name[]
  pokemon_encounters: PokemonEncounter[]
}

export type EncounterMethodRate = {
  encounter_method: NamedApiResource
  version_details: EncounterVersionDetails[]
}

export type EncounterVersionDetails = {
  rate: number
  verison: NamedApiResource
}

export type PokemonEncounter = {
  pokemon: NamedApiResource
  version_details: VersionEncounterDetail[]
}
