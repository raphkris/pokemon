import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'

const path = 'location'

export const getLocations = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getLocation = async (idOrName: number | string): Promise<Location> => {
  return fetchData<Location>(`${path}/${idOrName}`)
}
