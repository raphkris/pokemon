import type { Name, NamedApiResource } from '../../../types/common'

export type ItemCategory = {
  id: number
  name: string
  items: NamedApiResource[]
  names: Name[]
  pocket: NamedApiResource
}
