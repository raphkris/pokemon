import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { EncounterMethod } from './types'

const path = Routes.Encounters.EncounterMethod

export const listEncounterMethods = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getEncounterMethod = async (id: Identifier): Promise<EncounterMethod> => {
  return getResource(path, id)
}
