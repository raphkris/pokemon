import { getResource, listResources } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { EvolutionTrigger } from './types'
import { Routes } from '@/services/poke-api/config'
import type { Identifier } from '@/services/poke-api/client-helpers'

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
