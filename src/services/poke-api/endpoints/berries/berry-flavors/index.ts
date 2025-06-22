import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
import type { BerryFlavor } from './types'

const path = Routes.Berries.BerryFlavor

export const getBerryFlavors = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getBerryFlavor = async (id: Identifier): Promise<BerryFlavor> => {
  return getResource(path, id)
}
