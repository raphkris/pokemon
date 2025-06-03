import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { PokemonShape } from './types'

const path = 'pokemon-shape'

export const getPokemonShapes = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getPokemonShape = async (idOrName: number | string): Promise<PokemonShape> => {
  return fetchData<PokemonShape>(`${path}/${idOrName}`)
}
