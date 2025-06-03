import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { EggGroup } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'

const path = PokeApiRoutes.Pokemon.EggGroup

export const getEggGroups = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getEggGroup = async (idOrName: number | string): Promise<EggGroup> => {
  return fetchData<EggGroup>(`${path}/${idOrName}`)
}
