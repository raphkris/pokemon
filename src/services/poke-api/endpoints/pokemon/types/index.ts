import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { PokemonType } from '../pokemon/types'

const path = 'type'

export const getPokemonTypes = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getPokemonType = async (idOrName: number | string): Promise<PokemonType> => {
  return fetchData<PokemonType>(`${path}/${idOrName}`)
}
