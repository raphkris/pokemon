import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { VersionGroup } from './types'

const path = 'version-group'

export const getVersionGroups = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { offset, limit })
}

export const getVersionGroup = async (idOrName: number | string): Promise<VersionGroup> => {
  return fetchData<VersionGroup>(`${path}/${idOrName}`)
}
