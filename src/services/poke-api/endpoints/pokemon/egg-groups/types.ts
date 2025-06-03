import type { Name, NamedApiResource } from '@/services/poke-api/types'

export type EggGroup = {
  id: number
  name: string
  names: Name[]
  pokemon_species: NamedApiResource[]
}
