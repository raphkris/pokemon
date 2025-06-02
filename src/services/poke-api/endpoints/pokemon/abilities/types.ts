import type { Effect, NamedApiResource } from '@/services/poke-api/types'

export type AbilityEffectChange = {
  effect_entries: Effect[]
  version_group: NamedApiResource
}
