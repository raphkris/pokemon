import type { NamedApiResource, VersionGameIndex } from '@/services/poke-api/types/common'

export type Pokemon = {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: PokemonAbility[]
  forms: NamedApiResource[]
  game_indices: VersionGameIndex[]
  held_items: PokemonHeldItem[]
  location_area_encounters: string
  moves: PokemonMove[]
  past_types: PokemonTypePast[]
  past_abilities: PokemonAbilityPast[]
  sprites: PokemonSprites
  cries: PokemonCries
  species: NamedApiResource
  stats: PokemonStat[]
  types: PokemonType[]
}

export type PokemonAbility = {
  is_hidden: boolean
  slot: number
  ability: NamedApiResource
}

export type PokemonType = {
  slot: number
  type: NamedApiResource
}

export type PokemonFormType = {} & PokemonType

export type PokemonTypePast = {
  generation: NamedApiResource
  types: PokemonType[]
}

export type PokemonAbilityPast = {
  generation: NamedApiResource
  abilities: PokemonAbility[]
}

export type PokemonHeldItem = {
  item: NamedApiResource
  version_details: PokemonHeldItemVersion[]
}

export type PokemonHeldItemVersion = {
  version: NamedApiResource
  rarity: number
}

export type PokemonMove = {
  move: NamedApiResource
  version_group_details: PokemonMoveVersion[]
}

export type PokemonMoveVersion = {
  move_learn_method: NamedApiResource
  version_group: NamedApiResource
  level_learned_at: number
  order: number
}

export type PokemonStat = {
  stat: NamedApiResource
  effort: number
  base_stat: number
}

export type PokemonSprites = {
  front_default: string
  front_shiny: string
  front_female: string
  front_shiny_female: string
  back_default: string
  back_shiny: string
  back_female: string
  back_shiny_female: string
}

export type PokemonCries = {
  latest: string
  legacy: string
}
