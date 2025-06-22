import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { BerryFlavor } from './types'

const path = Routes.Berries.BerryFlavor

export const listBerryFlavors = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getBerryFlavor = async (id: Identifier): Promise<BerryFlavor> => {
  return getResource(path, id)
}
