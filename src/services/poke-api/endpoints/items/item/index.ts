import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { Item } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'

const path = PokeApiRoutes.Items.Item

export const getItems = async (limit?: number, offset?: number): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getItem = async (idOrName: number | string): Promise<Item> => {
  return fetchData<Item>(`${path}/${idOrName}`)
}
