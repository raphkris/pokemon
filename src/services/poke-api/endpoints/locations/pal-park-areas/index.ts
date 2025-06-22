import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { PalParkArea } from './types'

const path = Routes.Locations.PalParkArea

export const listPalParkAreas = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getPalParkArea = async (id: Identifier): Promise<PalParkArea> => {
  return getResource(path, id)
}
