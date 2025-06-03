import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { EvolutionChain } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'

const path = PokeApiRoutes.Evolution.EvolutionChain

export const getEvolutionChains = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getEvolutionChain = async (id: number): Promise<EvolutionChain> => {
  return fetchData<EvolutionChain>(`${path}/${id}`)
}
