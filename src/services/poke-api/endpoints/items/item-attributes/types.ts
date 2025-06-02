import type { Description, NamedApiResource } from '@/services/poke-api/types'

export type ItemAttribute = {
  id: number
  name: string
  items: NamedApiResource[]
  descriptions: Description[]
}
