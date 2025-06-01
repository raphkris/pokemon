import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { ContestEffect } from './types'

const path = 'contest-effect'

export const getContestEffects = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getContestEffect = async (id: number): Promise<ContestEffect> => {
  return fetchData<ContestEffect>(`${path}/${id}`)
}
