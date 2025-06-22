import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { BerryFirmness } from './types'

const path = Routes.Berries.BerryFirmness

export const listBerryFirmnesses = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getBerryFirmness = async (id: Identifier): Promise<BerryFirmness> => {
  return getResource(path, id)
}
