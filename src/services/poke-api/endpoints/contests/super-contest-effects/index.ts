import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { SuperContestEffect } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'

const path = PokeApiRoutes.Contests.SuperContestEffect

export const getSuperContestEffects = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getSuperContestEffect = async (id: number): Promise<SuperContestEffect> => {
  return fetchData<SuperContestEffect>(`${path}/${id}`)
}
