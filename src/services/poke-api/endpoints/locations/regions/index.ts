import { getResource, listResources } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { Region } from './types'
import { Routes } from '@/services/poke-api/config'
import type { Identifier } from '@/services/poke-api/client-helpers'

const path = Routes.Locations.Region

export const getRegions = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getRegion = async (id: Identifier): Promise<Region> => {
  return getResource(path, id)
}
