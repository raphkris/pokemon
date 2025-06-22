import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
import type { ItemAttribute } from './types'

const path = Routes.Items.ItemAttribute

export const getItemAttributes = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getItemAttribute = async (id: Identifier): Promise<ItemAttribute> => {
  return getResource(path, id)
}
