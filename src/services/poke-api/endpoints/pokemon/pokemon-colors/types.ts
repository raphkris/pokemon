import type { Name, NamedApiResourceList } from '@/services/poke-api/types/common'

export type PokemonColor = {
  id: number
  name: string
  names: Name[]
  pokemon_species: NamedApiResourceList[]
}
