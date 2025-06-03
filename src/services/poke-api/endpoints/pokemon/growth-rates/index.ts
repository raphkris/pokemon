import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { GrowthRate } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'

const path = PokeApiRoutes.Pokemon.GrowthRate

export const getGrowthRates = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getGrowthRate = async (idOrName: number | string): Promise<GrowthRate> => {
  return fetchData<GrowthRate>(`${path}/${idOrName}`)
}
