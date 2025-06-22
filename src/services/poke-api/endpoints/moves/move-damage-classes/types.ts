import type { Description, Name, NamedApiResource } from '../../../types/common'

export type MoveDamageClass = {
  id: number
  name: string
  descriptions: Description[]
  moves: NamedApiResource[]
  names: Name[]
}
