import type { Effect, FlavorText } from '@/services/poke-api/types/common'

export type ContestEffect = {
  id: number
  appeal: number
  jam: number
  effect_entries: Effect[]
  flavor_text_entries: FlavorText[]
}
