import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { LocationArea } from './types'

const path = 'location-area'

export const getLocationAreas = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getLocationArea = async (idOrName: number | string): Promise<LocationArea> => {
  return fetchData<LocationArea>(`${path}/${idOrName}`)
}
