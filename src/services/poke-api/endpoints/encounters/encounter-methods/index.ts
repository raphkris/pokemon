import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { EncounterMethod } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'

const path = PokeApiRoutes.Encounters.EncounterMethod

export const getEncounterMethods = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getEncounterMethod = async (idOrName: number | string): Promise<EncounterMethod> => {
  return fetchData<EncounterMethod>(`${path}/${idOrName}`)
}
