import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { EncounterMethod } from './types'

const path = 'encounter-method'

export const getEncounterMethods = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getEncounterMethod = async (idOrName: number | string): Promise<EncounterMethod> => {
  return fetchData<EncounterMethod>(`${path}/${idOrName}`)
}
