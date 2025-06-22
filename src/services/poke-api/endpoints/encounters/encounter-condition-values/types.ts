import type { Name, NamedApiResource } from '@/services/poke-api/types/common'

export type EncounterConditionValue = {
  id: number
  name: string
  condition: NamedApiResource
  names: Name[]
}
