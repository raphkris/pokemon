import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { Nature } from './types'

const path = Routes.Pokemon.Nature

export const listNatures = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getNature = async (id: Identifier): Promise<Nature> => {
  return getResource(path, id)
}
