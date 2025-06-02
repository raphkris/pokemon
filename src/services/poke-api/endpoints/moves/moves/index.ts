import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { Move } from './types'

const path = 'move'

export const getMoves = async (limit?: number, offset?: number): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { offset, limit })
}

export const getMove = async (idOrName: number | string): Promise<Move> => {
  return fetchData<Move>(`${path}/${idOrName}`)
}
