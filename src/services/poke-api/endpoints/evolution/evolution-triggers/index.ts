import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { EvolutionTrigger } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'

const path = PokeApiRoutes.Evolution.EvolutionTrigger

export const getEvolutionTriggers = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getEvolutionTrigger = async (idOrName: number | string): Promise<EvolutionTrigger> => {
  return fetchData<EvolutionTrigger>(`${path}/${idOrName}`)
}
