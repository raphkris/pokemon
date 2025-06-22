import type { Name, NamedApiResource } from '../../../types/common'

export type PalParkArea = {
  id: number
  name: string
  names: Name[]
  pokemon_encounters: PalParkEncounterSpecies[]
}

export type PalParkEncounterSpecies = {
  base_score: number
  rate: number
  pokemon_species: NamedApiResource
}
