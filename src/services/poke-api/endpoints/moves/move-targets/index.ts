import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { MoveTarget } from './types'

const path = 'move-target'

export const getMoveTargets = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { offset, limit })
}

export const getMoveTarget = async (idOrName: number | string): Promise<MoveTarget> => {
  return fetchData<MoveTarget>(`${path}/${idOrName}`)
}
