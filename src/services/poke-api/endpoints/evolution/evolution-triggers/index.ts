import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
import type { EvolutionTrigger } from './types'

const path = Routes.Evolution.EvolutionTrigger

export const getEvolutionTriggers = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getEvolutionTrigger = async (id: Identifier): Promise<EvolutionTrigger> => {
  return getResource(path, id)
}
