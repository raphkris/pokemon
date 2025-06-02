import type { Name, NamedApiResource } from '@/services/poke-api/types'

export type Region = {
  id: number
  name: string
  names: Name[]
  main_generation: NamedApiResource
  pokedexes: NamedApiResource[]
  version_groups: NamedApiResource[]
}
