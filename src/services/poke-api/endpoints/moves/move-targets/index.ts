import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { MoveTarget } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'

const path = PokeApiRoutes.Moves.MoveTarget

export const getMoveTargets = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getMoveTarget = async (idOrName: number | string): Promise<MoveTarget> => {
  return fetchData<MoveTarget>(`${path}/${idOrName}`)
}
