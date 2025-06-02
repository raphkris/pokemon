import type {
  ApiResource,
  GenerationGameIndex,
  MachineVersionDetail,
  Name,
  NamedApiResource,
  VerboseEffect,
  VersionGroupFlavorText
} from '@/services/poke-api/types'

export type Item = {
  id: number
  name: string
  cost: number
  fling_power: number
  fling_effect: NamedApiResource
  attributes: NamedApiResource[]
  category: NamedApiResource
  effect_entries: VerboseEffect[]
  flavor_text_entries: VersionGroupFlavorText[]
  game_indices: GenerationGameIndex[]
  names: Name[]
  sprites: ItemSprites
  held_by_pokemon: ItemHolderPokemon[]
  baby_trigger_for: ApiResource
  machines: MachineVersionDetail[]
}

export type ItemSprites = {
  default: string
}

export type ItemHolderPokemon = {
  pokemon: NamedApiResource
  version_detials: ItemHolderPokemonVersionDetail[]
}

export type ItemHolderPokemonVersionDetail = {
  rarity: number
  version: NamedApiResource
}
