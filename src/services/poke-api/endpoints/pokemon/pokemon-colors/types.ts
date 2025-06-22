import type { Name, NamedApiResourceList } from '../../../types/common'

export type PokemonColor = {
  id: number
  name: string
  names: Name[]
  pokemon_species: NamedApiResourceList[]
}
