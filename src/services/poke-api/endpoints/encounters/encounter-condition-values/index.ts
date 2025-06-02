import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { EncounterConditionValue } from './types'

const path = 'encounter-condition-value'

export const getEncounterConditionValues = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getEncounterConditionValue = async (
  idOrName: number | string
): Promise<EncounterConditionValue> => {
  return fetchData<EncounterConditionValue>(`${path}/${idOrName}`)
}
