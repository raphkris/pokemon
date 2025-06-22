import type { Name, NamedApiResource } from '@/services/poke-api/types/common'

export type Generation = {
  id: number
  name: string
  abilities: NamedApiResource[]
  names: Name[]
  main_region: NamedApiResource
  moves: NamedApiResource[]
  pokemon_species: NamedApiResource[]
  types: NamedApiResource[]
  version_groups: NamedApiResource[]
}
