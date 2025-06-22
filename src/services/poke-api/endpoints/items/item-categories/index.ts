import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
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
