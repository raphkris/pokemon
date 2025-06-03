import { fetchData } from '@/services/poke-api/client'
import { PokeApiRoutes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types'

const path = PokeApiRoutes.Locations.Location

export const getLocations = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getLocation = async (idOrName: number | string): Promise<Location> => {
  return fetchData<Location>(`${path}/${idOrName}`)
}
