import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
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
