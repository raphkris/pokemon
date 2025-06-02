import type { Name, NamedApiResource } from '@/services/poke-api/types'

export type Version = {
  id: number
  name: string
  names: Name[]
  version_group: NamedApiResource
}
