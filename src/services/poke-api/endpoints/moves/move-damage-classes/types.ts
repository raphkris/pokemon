import type { Description, Name, NamedApiResource } from '@/services/poke-api/types'

export type MoveDamageClass = {
  id: number
  name: string
  descriptions: Description[]
  moves: NamedApiResource[]
  names: Name[]
}
