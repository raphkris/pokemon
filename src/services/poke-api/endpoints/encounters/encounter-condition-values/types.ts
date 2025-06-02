import type { Name, NamedApiResource } from '@/services/poke-api/types'

export type EncounterConditionValue = {
  id: number
  name: string
  condition: NamedApiResource
  names: Name[]
}
