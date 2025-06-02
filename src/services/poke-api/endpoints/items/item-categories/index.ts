import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { ItemCategory } from './types'

const path = 'item-category'

export const getItemCategories = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getItemCategory = async (idOrName: string | number): Promise<ItemCategory> => {
  return fetchData<ItemCategory>(`${path}/${idOrName}`)
}
