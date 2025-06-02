import type { Effect, NamedApiResource } from '@/services/poke-api/types'

export type ItemFlingEffect = {
  id: number
  name: string
  effect_entries: Effect[]
  items: NamedApiResource[]
}
