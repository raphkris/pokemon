import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { BerryFirmness } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'

const path = PokeApiRoutes.Berries.BerryFirmness

export const getBerryFirmnesses = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getBerryFirmness = async (idOrName: number | string): Promise<BerryFirmness> => {
  return fetchData<BerryFirmness>(`${path}/${idOrName}`)
}
