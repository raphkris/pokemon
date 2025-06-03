import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { Stat } from './types'

const path = 'stat'

export const getStats = async (limit?: number, offset?: number): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getStat = async (idOrName: number | string): Promise<Stat> => {
  return fetchData<Stat>(`${path}/${idOrName}`)
}
