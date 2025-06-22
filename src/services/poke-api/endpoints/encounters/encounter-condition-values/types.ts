import type { Name, NamedApiResource } from '../../../types/common'

export type EncounterConditionValue = {
  id: number
  name: string
  condition: NamedApiResource
  names: Name[]
}
