import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
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
