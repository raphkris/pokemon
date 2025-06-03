import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { PokeathlonStat } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'

const path = PokeApiRoutes.Pokemon.PokeathlonStat

export const getPokeathlonStats = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getPokeathlonStat = async (idOrName: number | string): Promise<PokeathlonStat> => {
  return fetchData<PokeathlonStat>(`${path}/${idOrName}`)
}
