import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { Berry } from './types'

const path = Routes.Berries.Berry

export const listBerries = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getBerry = async (id: Identifier): Promise<Berry> => {
  return getResource(path, id)
}
