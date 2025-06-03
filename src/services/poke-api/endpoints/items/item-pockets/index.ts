import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { ItemPocket } from './types'

const path = 'item-pocket'

export const getItemPockets = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getItemPocket = async (idOrName: number | string): Promise<ItemPocket> => {
  return fetchData<ItemPocket>(`${path}/${idOrName}`)
}
