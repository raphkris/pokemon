import type { Effect, FlavorText } from '@/services/poke-api/types'

export type ContestEffect = {
  id: number
  appeal: number
  jam: number
  effect_entries: Effect[]
  flavor_text_entries: FlavorText[]
}
