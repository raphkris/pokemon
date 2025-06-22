import type { Effect, Name, NamedApiResource, VerboseEffect } from '../../../types/common'

export type Ability = {
  id: number
  name: string
  is_main_series: boolean
  generation: NamedApiResource
  names: Name[]
  effect_entries: VerboseEffect[]
  effect_changes: AbilityEffectChange[]
  flavor_text_entries: AbilityFlavorText[]
  pokemon: AbilityPokemon[]
}

export type AbilityEffectChange = {
  effect_entries: Effect[]
  version_group: NamedApiResource
}

export type AbilityFlavorText = {
  effect_entries: Effect[]
  verison_group: NamedApiResource
}

export type AbilityPokemon = {
  is_hidden: boolean
  slot: number
  pokemon: NamedApiResource
}
