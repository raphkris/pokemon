import type { Description, Name, NamedApiResource } from '../../../types/common'

export type MoveTarget = {
  id: number
  name: string
  descriptions: Description[]
  moves: NamedApiResource[]
  names: Name[]
}
