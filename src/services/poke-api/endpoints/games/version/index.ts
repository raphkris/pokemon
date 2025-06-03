import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { Version } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'

const path = PokeApiRoutes.Games.Version

export const getVersions = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getVersion = async (idOrName: number | string): Promise<Version> => {
  return fetchData<Version>(`${path}/${idOrName}`)
}
