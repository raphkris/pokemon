import type { Effect, NamedApiResource } from '../../../types/common'

export type ItemFlingEffect = {
  id: number
  name: string
  effect_entries: Effect[]
  items: NamedApiResource[]
}
