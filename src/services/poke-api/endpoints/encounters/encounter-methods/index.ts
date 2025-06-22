import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
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
