import { getResource, listResources } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { ItemPocket } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'
import type { Identifier } from '@/services/poke-api/client-helpers'

const path = PokeApiRoutes.Items.ItemPocket

export const getItemPockets = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getItemPocket = async (id: Identifier): Promise<ItemPocket> => {
  return getResource(path, id)
}
