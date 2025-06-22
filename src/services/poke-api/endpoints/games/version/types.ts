import type { Name, NamedApiResource } from '../../../types/common'

export type Version = {
  id: number
  name: string
  names: Name[]
  version_group: NamedApiResource
}
