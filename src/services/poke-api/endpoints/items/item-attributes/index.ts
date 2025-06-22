import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { ItemAttribute } from './types'

const path = Routes.Items.ItemAttribute

export const listItemAttributes = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getItemAttribute = async (id: Identifier): Promise<ItemAttribute> => {
  return getResource(path, id)
}
