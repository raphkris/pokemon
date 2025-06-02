import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { EncounterCondition } from './types'

const path = 'encounter-condition'

export const getEncounterConditions = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getEncounterCondition = async (
  idOrName: number | string
): Promise<EncounterCondition> => {
  return fetchData<EncounterCondition>(`${path}/${idOrName}`)
}
