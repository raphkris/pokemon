import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { MoveCategory } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'

const path = PokeApiRoutes.Moves.MoveCategory

export const getMoveCategories = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getMoveCategory = async (idOrName: number | string): Promise<MoveCategory> => {
  return fetchData<MoveCategory>(`${path}/${idOrName}`)
}
