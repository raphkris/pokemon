import type { Name, NamedApiResource } from '../../../types/common'

export type Region = {
  id: number
  name: string
  names: Name[]
  main_generation: NamedApiResource
  pokedexes: NamedApiResource[]
  version_groups: NamedApiResource[]
}
