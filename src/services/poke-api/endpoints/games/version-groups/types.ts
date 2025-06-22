import type { NamedApiResource } from '../../../types/common'

export type VersionGroup = {
  id: number
  name: string
  order: number
  generation: NamedApiResource
  move_learn_methods: NamedApiResource[]
  pokedexes: NamedApiResource[]
  regions: NamedApiResource[]
  versions: NamedApiResource[]
}
