import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { EvolutionChain } from './types'

const path = Routes.Evolution.EvolutionChain

export const listEvolutionChains = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getEvolutionChain = async (id: Identifier): Promise<EvolutionChain> => {
  return getResource(path, id)
}
