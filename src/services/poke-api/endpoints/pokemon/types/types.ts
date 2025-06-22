import type { GenerationGameIndex, Name, NamedApiResource } from '@/services/poke-api/types/common'

export type Type = {
  id: number
  name: string
  damage_relations: TypeRelations
  past_damage_relations: TypeRelationsPast[]
  game_indices: GenerationGameIndex[]
  generation: NamedApiResource
  move_damage_class: NamedApiResource
  names: Name[]
  pokemon: TypePokemon[]
  moves: NamedApiResource[]
}

export type TypePokemon = {
  slot: number
  pokemon: NamedApiResource
}

export type TypeRelations = {
  no_damage_to: NamedApiResource[]
  half_damage_to: NamedApiResource[]
  double_damage_to: NamedApiResource[]
  no_damage_from: NamedApiResource[]
  half_damage_from: NamedApiResource[]
  double_damage_from: NamedApiResource[]
}

export type TypeRelationsPast = {
  generation: NamedApiResource
  damage_relations: TypeRelations
}
