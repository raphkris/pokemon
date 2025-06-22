import type { NamedApiResource } from '@/services/poke-api/types/common'

export type Gender = {
  id: number
  name: string
  pokemon_species_details: PokemonSpeciesGender[]
  required_for_evolution: NamedApiResource[]
}

export type PokemonSpeciesGender = {
  rate: number
  pokemon_species: NamedApiResource
}
