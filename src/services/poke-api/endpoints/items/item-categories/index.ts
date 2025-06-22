import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
import type { ItemCategory } from './types'

const path = Routes.Items.ItemCategory

export const listItemCategories = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getItemCategory = async (id: Identifier): Promise<ItemCategory> => {
  return getResource(path, id)
}
