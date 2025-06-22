import type { Name, NamedApiResource } from '@/services/poke-api/types/common'

export type ItemPocket = {
  id: number
  name: string
  categories: NamedApiResource[]
  names: Name[]
}
