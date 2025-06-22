import type { Name, NamedApiResource } from '../../../types/common'

export type MoveAilment = {
  id: number
  name: string
  moves: NamedApiResource[]
  names: Name[]
}
