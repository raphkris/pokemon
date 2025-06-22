import type { Effect, NamedApiResource } from '@/services/poke-api/types/common'

export type ItemFlingEffect = {
  id: number
  name: string
  effect_entries: Effect[]
  items: NamedApiResource[]
}
