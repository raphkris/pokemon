import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { EncounterCondition } from './types'
import { Routes } from '@/services/poke-api/config'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { getResource, listResources } from '@/services/poke-api/client'

const path = Routes.Encounters.EncounterCondition

export const listEncounterConditions = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getEncounterCondition = async (id: Identifier): Promise<EncounterCondition> => {
  return getResource(path, id)
}
