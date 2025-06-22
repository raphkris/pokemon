import type { Name, NamedApiResource } from '../../../types/common'

export type ItemPocket = {
  id: number
  name: string
  categories: NamedApiResource[]
  names: Name[]
}
