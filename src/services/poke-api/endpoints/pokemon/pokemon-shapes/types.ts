import type { Name, NamedApiResource } from '../../../types/common'

export type PokemonShape = {
  id: number
  name: string
  awesome_names: AwesomeName[]
  names: Name[]
  pokemon_species: NamedApiResource[]
}

export type AwesomeName = {
  awesome_name: string
  language: NamedApiResource
}
