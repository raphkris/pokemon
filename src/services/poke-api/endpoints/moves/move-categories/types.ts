import type { Description, NamedApiResource } from '@/services/poke-api/types/common'

export type MoveCategory = {
  id: number
  name: string
  moves: NamedApiResource[]
  descriptions: Description[]
}
