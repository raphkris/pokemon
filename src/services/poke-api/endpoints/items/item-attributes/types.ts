import type { Description, NamedApiResource } from '../../../types/common'

export type ItemAttribute = {
  id: number
  name: string
  items: NamedApiResource[]
  descriptions: Description[]
}
