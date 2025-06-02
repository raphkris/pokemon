import type { Name, NamedApiResource } from '@/services/poke-api/types'

export type ItemPocket = {
  id: number
  name: string
  categories: NamedApiResource[]
  names: Name[]
}
