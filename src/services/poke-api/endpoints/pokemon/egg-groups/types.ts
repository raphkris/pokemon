import type { Name, NamedApiResource } from '@/services/poke-api/types/common'

export type EggGroup = {
  id: number
  name: string
  names: Name[]
  pokemon_species: NamedApiResource[]
}
