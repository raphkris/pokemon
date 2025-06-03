import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { VersionGroup } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'

const path = PokeApiRoutes.Games.VersionGroup

export const getVersionGroups = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getVersionGroup = async (idOrName: number | string): Promise<VersionGroup> => {
  return fetchData<VersionGroup>(`${path}/${idOrName}`)
}
