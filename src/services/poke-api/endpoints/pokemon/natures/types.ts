import type { Name, NamedApiResource } from '../../../types/common'

export type Nature = {
  id: number
  name: string
  decreased_stat: NamedApiResource
  increased_stat: NamedApiResource
  hates_flavor: NamedApiResource
  likes_flavor: NamedApiResource
  pokeathlon_stat_changes: NatureStatChange[]
  move_battle_style_preferences: MoveBattleStylePreference[]
  names: Name[]
}

export type NatureStatChange = {
  max_change: number
  pokeathlon_stat: NamedApiResource
}

export type MoveBattleStylePreference = {
  low_hp_preference: number
  high_hp_preference: number
  move_battle_style: NamedApiResource
}
