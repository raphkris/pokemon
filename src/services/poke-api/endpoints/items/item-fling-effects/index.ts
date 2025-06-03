import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { ItemFlingEffect } from './types'

const path = 'item-fling-effect'

export const getItemFlingEffects = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getItemFlingEffect = async (idOrName: number | string): Promise<ItemFlingEffect> => {
  return fetchData<ItemFlingEffect>(`${path}/${idOrName}`)
}
