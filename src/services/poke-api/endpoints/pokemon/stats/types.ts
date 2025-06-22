import type { ApiResource, Name, NamedApiResource } from '../../../types/common'

export type Stat = {
  id: number
  name: string
  game_index: number
  is_battle_only: boolean
  affecting_moves: MoveStatAffect
  affecting_natures: NatureStatAffectSets
  characteristics: ApiResource[]
  move_damage_class: NamedApiResource
  names: Name[]
}

export type MoveStatAffectSets = {
  increase: MoveStatAffect[]
  decrease: MoveStatAffect[]
}

export type MoveStatAffect = {
  change: number
  move: NamedApiResource
}

export type NatureStatAffectSets = {
  increase: NamedApiResource[]
  decrease: NamedApiResource[]
}
