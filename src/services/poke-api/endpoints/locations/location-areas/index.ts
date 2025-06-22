import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
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
