import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
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
