import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { MoveCategory } from './types'

const path = 'move-category'

export const getMoveCategories = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { offset, limit })
}

export const getMoveCategory = async (idOrName: number | string): Promise<MoveCategory> => {
  return fetchData<MoveCategory>(`${path}/${idOrName}`)
}
