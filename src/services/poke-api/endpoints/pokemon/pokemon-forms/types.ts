import type { Name, NamedApiResource } from '@/services/poke-api/types/common'
import type { PokemonFormType } from '../pokemon/types'

export type PokemonForm = {
  id: number
  name: string
  order: number
  form_order: number
  is_default: boolean
  is_battle_only: boolean
  is_mega: boolean
  form_name: string
  pokemon: NamedApiResource
  types: PokemonFormType[]
  sprites: PokemonFormSprites
  version_group: NamedApiResource
  names: Name[]
  form_names: Name[]
}

export type PokemonFormSprites = {
  front_default: string
  front_shiny: string
  back_default: string
  back_shiny: string
}
