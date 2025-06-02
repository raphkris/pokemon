import type { Name } from '@/services/poke-api/types'

export type EncounterMethod = {
  id: number
  name: string
  order: number
  names: Name[]
}
