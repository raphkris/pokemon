import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { PokemonHabitat } from './types'

const path = 'pokemon-habitat'

export const getPokemonHabitats = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getPokemonHabitat = async (idOrName: number | string): Promise<PokemonHabitat> => {
  return fetchData<PokemonHabitat>(`${path}/${idOrName}`)
}
