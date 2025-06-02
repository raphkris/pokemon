import type { NamedApiResource } from '@/services/poke-api/types'

export type Machine = {
  id: number
  item: NamedApiResource
  move: NamedApiResource
  version_group: NamedApiResource
}
