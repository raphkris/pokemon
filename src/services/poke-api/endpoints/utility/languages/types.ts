import type { Name } from '@/services/poke-api/types/common'

export type Language = {
  id: number
  name: string
  official: boolean
  iso639: string
  iso3166: string
  names: Name[]
}
