import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
import type { LocationArea } from './types'

const path = Routes.Locations.LocationArea

export const listLocationAreas = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getLocationArea = async (id: Identifier): Promise<LocationArea> => {
  return getResource(path, id)
}
