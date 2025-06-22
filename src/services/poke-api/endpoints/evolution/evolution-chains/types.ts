import type { NamedApiResource } from '../../../types/common'

export type EvolutionChain = {
  id: number
  baby_trigger_item: NamedApiResource
  chain: ChainLink
}

export type ChainLink = {
  is_baby: boolean
  species: NamedApiResource
  evolution_details: EvolutionDetail[]
  evolves_to: ChainLink[]
}

export type EvolutionDetail = {
  item: NamedApiResource
  trigger: NamedApiResource
  gender: number
  held_item: NamedApiResource
  known_move: NamedApiResource
  known_move_type: NamedApiResource
  location: NamedApiResource
  min_level: number
  min_happines: number
  min_beauty: number
  min_affection: number
  needs_overworld_rain: boolean
  party_species: NamedApiResource
  party_type: NamedApiResource
  relative_physical_stats: number
  time_of_day: string
  trade_species: NamedApiResource
  turn_upside_down: boolean
}
