import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { Machine } from './types'

const path = 'machine'

export const getMachines = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getMachine = async (id: number): Promise<Machine> => {
  return fetchData<Machine>(`${path}/{${id}}`)
}
