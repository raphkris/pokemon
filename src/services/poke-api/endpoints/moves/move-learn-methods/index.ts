import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { MoveLearnMethod } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'

const path = PokeApiRoutes.Moves.MoveLearnMethod

export const getMoveLearnMethods = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getMoveLearnMethod = async (idOrName: number | string): Promise<MoveLearnMethod> => {
  return fetchData<MoveLearnMethod>(`${path}/${idOrName}`)
}
