import type { Description, Name, NamedApiResource } from '@/services/poke-api/types'

export type MoveLearnMethod = {
  id: number
  name: string
  descriptions: Description[]
  names: Name[]
  version_groups: NamedApiResource[]
}
