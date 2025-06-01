import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { ContestType } from './types'

const path = 'contest-type'

export const getContestTypes = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getContestType = async (idOrName: number | string): Promise<ContestType> => {
  return fetchData<ContestType>(`${path}/${idOrName}`)
}
