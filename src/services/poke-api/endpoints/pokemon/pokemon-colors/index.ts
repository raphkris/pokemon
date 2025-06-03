import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { PokemonColor } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'

const path = PokeApiRoutes.Pokemon.PokemonColor

export const getPokemonColors = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getPokemonColor = async (idOrName: number | string): Promise<PokemonColor> => {
  return fetchData<PokemonColor>(`${path}/${idOrName}`)
}
