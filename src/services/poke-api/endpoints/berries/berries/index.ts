import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { Berry } from './types'

const path = 'berry'

export const getBerries = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getBerry = async (idOrName: number | string): Promise<Berry> => {
  return fetchData<Berry>(`${path}/${idOrName}`)
}
