import type { Name, NamedApiResource } from '@/services/poke-api/types'

export type EncounterCondition = {
  id: number
  name: string
  names: Name[]
  values: NamedApiResource[]
}
