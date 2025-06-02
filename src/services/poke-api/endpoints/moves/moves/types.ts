import type {
  AbilityEffectChange,
  ApiResource,
  MachineVersionDetail,
  Name,
  NamedApiResource,
  VerboseEffect
} from '@/services/poke-api/types'

export type Move = {
  id: number
  name: string
  accuracy: number
  effect_chance: number
  pp: number
  priority: number
  power: number
  contest_combos: ContestComboSets
  contest_type: NamedApiResource
  contest_effect: ApiResource
  damage_class: NamedApiResource
  effect_entries: VerboseEffect[]
  effect_changes: AbilityEffectChange
  learned_by_pokemon: NamedApiResource
  flavor_text_entries: MoveFlavorText[]
  generation: NamedApiResource
  machines: MachineVersionDetail[]
  meta: MoveMetaData
  names: Name[]
  past_values: PastMoveStatValues[]
  stat_changes: MoveStatChange[]
  super_contest_effect: ApiResource
  target: NamedApiResource
  type: NamedApiResource
}

export type ContestComboSets = {
  normal: ContestComboDetail
  super: ContestComboDetail
}

export type ContestComboDetail = {
  use_before: NamedApiResource[]
  use_after: NamedApiResource[]
}

export type MoveFlavorText = {
  flavor_text: string
  language: NamedApiResource
  version_group: NamedApiResource
}

export type MoveMetaData = {
  ailment: NamedApiResource
  category: NamedApiResource
  min_hits: number
  max_hits: number
  min_turns: number
  max_turns: number
  drain: number
  healing: number
  crit_rate: number
  ailment_chance: number
  flinch_chance: number
  stat_chance: number
}

export type MoveStatChange = {
  change: number
  stat: NamedApiResource
}

export type PastMoveStatValues = {
  accuracy: number
  effect_chance: number
  power: number
  pp: number
  effect_entries: VerboseEffect[]
  type: NamedApiResource
  version_group: NamedApiResource
}
