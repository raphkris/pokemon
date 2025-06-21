import { getResource, listResources } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { ItemFlingEffect } from './types'
import { Routes } from '@/services/poke-api/config'
import type { Identifier } from '@/services/poke-api/client-helpers'

const path = Routes.Items.ItemFlingEffect

export const getItemFlingEffects = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getItemFlingEffect = async (id: Identifier): Promise<ItemFlingEffect> => {
  return getResource(path, id)
}
