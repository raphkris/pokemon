import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { EvolutionTrigger } from './types'

const path = Routes.Evolution.EvolutionTrigger

export const listEvolutionTriggers = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getEvolutionTrigger = async (id: Identifier): Promise<EvolutionTrigger> => {
  return getResource(path, id)
}
