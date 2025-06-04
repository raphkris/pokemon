import { getResource, listResources } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { GrowthRate } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'
import type { Identifier } from '@/services/poke-api/client-helpers'

const path = PokeApiRoutes.Pokemon.GrowthRate

export const listGrowthRates = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getGrowthRate = async (id: Identifier): Promise<GrowthRate> => {
  return getResource(path, id)
}
