import type { Description, NamedApiResource } from '../../../types/common'

export type MoveCategory = {
  id: number
  name: string
  moves: NamedApiResource[]
  descriptions: Description[]
}
