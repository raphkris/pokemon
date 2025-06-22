import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
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
