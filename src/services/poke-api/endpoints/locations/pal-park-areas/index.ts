import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
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
