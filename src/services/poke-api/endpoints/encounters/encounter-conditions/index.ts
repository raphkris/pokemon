import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { EncounterCondition } from './types'

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
