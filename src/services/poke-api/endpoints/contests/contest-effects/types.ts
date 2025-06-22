import type { Effect, FlavorText } from '../../../types/common'

export type ContestEffect = {
  id: number
  appeal: number
  jam: number
  effect_entries: Effect[]
  flavor_text_entries: FlavorText[]
}
