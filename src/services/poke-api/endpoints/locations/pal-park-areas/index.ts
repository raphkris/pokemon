import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { PalParkArea } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'

const path = PokeApiRoutes.Locations.PalParkArea

export const getPalParkAreas = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getPalParkArea = async (idOrName: number | string): Promise<PalParkArea> => {
  return fetchData<PalParkArea>(`${path}/${idOrName}`)
}
