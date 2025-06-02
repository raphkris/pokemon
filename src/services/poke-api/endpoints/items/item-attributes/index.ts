import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { ItemAttribute } from './types'

const path = 'item-attribute'

export const getItemAttributes = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getItemAttribute = async (idOrName: number | string): Promise<ItemAttribute> => {
  return fetchData<ItemAttribute>(`${path}/${idOrName}`)
}
