import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { Region } from './types'

const path = Routes.Locations.Region

export const listRegions = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getRegion = async (id: Identifier): Promise<Region> => {
  return getResource(path, id)
}
