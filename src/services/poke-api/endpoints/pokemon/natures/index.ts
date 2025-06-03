import { fetchData } from '@/services/poke-api/client'
import type { Nature } from './types'
import type { NamedApiResourceList } from '@/services/poke-api/types'

const path = 'nature'

export const getNatures = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getNature = async (idOrName: number | string): Promise<Nature> => {
  return fetchData<Nature>(`${path}/${idOrName}`)
}
