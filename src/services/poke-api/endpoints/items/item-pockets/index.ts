import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
import type { ItemPocket } from './types'

const path = Routes.Items.ItemPocket

export const getItemPockets = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getItemPocket = async (id: Identifier): Promise<ItemPocket> => {
  return getResource(path, id)
}
