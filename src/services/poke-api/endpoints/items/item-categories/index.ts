import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { ItemCategory } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { getResource, listResources } from '@/services/poke-api/client'

const path = PokeApiRoutes.Items.ItemCategory

export const listItemCategories = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getItemCategory = async (id: Identifier): Promise<ItemCategory> => {
  return getResource(path, id)
}
