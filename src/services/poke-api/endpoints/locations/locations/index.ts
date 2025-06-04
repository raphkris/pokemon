import { getResource, listResources } from '@/services/poke-api/client'
import { PokeApiRoutes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { Identifier } from '@/services/poke-api/client-helpers'
import type { Location } from './types'

const path = PokeApiRoutes.Locations.Location

export const getLocations = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getLocation = async (id: Identifier): Promise<Location> => {
  return getResource(path, id)
}
