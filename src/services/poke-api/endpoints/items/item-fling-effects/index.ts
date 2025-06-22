import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { ItemFlingEffect } from './types'

const path = Routes.Items.ItemFlingEffect

export const listItemFlingEffects = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getItemFlingEffect = async (id: Identifier): Promise<ItemFlingEffect> => {
  return getResource(path, id)
}
