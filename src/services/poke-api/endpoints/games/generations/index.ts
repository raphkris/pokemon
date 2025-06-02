import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { Generation } from './types'

const path = 'generation'

export const getGenerations = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getGeneration = async (idOrName: number | string): Promise<Generation> => {
  return fetchData<Generation>(`${path}/${idOrName}`)
}
