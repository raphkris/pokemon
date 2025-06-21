import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { EncounterConditionValue } from './types'
import { Routes } from '@/services/poke-api/config'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { getResource, listResources } from '@/services/poke-api/client'

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
