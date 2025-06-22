import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { EncounterConditionValue } from './types'

const path = Routes.Encounters.EncounterConditionValue

export const listEncounterConditionValues = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getEncounterConditionValue = async (
  id: Identifier
): Promise<EncounterConditionValue> => {
  return getResource(path, id)
}
