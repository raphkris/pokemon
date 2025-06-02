import type { Name, NamedApiResource } from '@/services/poke-api/types'

export type ItemCategory = {
  id: number
  name: string
  items: NamedApiResource[]
  names: Name[]
  pocket: NamedApiResource
}
