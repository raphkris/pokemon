import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
import type { GrowthRate } from './types'

const path = Routes.Pokemon.GrowthRate

export const listGrowthRates = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getGrowthRate = async (id: Identifier): Promise<GrowthRate> => {
  return getResource(path, id)
}
