import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { ItemAttribute } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'

const path = PokeApiRoutes.Items.ItemAttribute

export const getItemAttributes = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getItemAttribute = async (idOrName: number | string): Promise<ItemAttribute> => {
  return fetchData<ItemAttribute>(`${path}/${idOrName}`)
}
