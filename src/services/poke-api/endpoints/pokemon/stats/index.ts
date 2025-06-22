import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { Stat } from './types'

const path = Routes.Pokemon.Stats

export const listStats = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getStat = async (id: Identifier): Promise<Stat> => {
  return getResource(path, id)
}
