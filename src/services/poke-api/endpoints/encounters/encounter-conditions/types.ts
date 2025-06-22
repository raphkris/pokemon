import type { Name, NamedApiResource } from '../../../types/common'

export type EncounterCondition = {
  id: number
  name: string
  names: Name[]
  values: NamedApiResource[]
}
