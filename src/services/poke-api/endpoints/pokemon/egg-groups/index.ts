import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
import type { EggGroup } from './types'

const path = Routes.Pokemon.EggGroup

export const listEggGroups = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getEggGroup = async (id: Identifier): Promise<EggGroup> => {
  return getResource(path, id)
}
