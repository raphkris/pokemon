import type { Name, NamedApiResource } from '@/services/poke-api/types/common'

export type MoveAilment = {
  id: number
  name: string
  moves: NamedApiResource[]
  names: Name[]
}
