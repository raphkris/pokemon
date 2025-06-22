import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { ItemPocket } from './types'

const path = Routes.Items.ItemPocket

export const listItemPockets = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getItemPocket = async (id: Identifier): Promise<ItemPocket> => {
  return getResource(path, id)
}
