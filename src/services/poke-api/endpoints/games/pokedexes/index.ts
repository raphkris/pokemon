import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { Pokedex } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'

const path = PokeApiRoutes.Games.Pokedex

export const getPokedexes = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getPokedex = async (idOrName: number | string): Promise<Pokedex> => {
  return fetchData<Pokedex>(`${path}/${idOrName}`)
}
