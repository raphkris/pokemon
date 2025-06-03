import type { Name, NamedApiResource } from '@/services/poke-api/types'

export type PokemonHabitat = {
  id: number
  name: string
  names: Name[]
  pokemon_species: NamedApiResource[]
}
