import type { Description, NamedApiResource } from '@/services/poke-api/types'

export type MoveCategory = {
  id: number
  name: string
  moves: NamedApiResource[]
  descriptions: Description[]
}
