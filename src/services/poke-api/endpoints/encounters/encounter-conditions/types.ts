import type { Name, NamedApiResource } from '@/services/poke-api/types/common'

export type EncounterCondition = {
  id: number
  name: string
  names: Name[]
  values: NamedApiResource[]
}
