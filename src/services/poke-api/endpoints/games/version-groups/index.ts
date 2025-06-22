import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { VersionGroup } from './types'

const path = Routes.Games.VersionGroup

export const listVersionGroups = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getVersionGroup = async (id: Identifier): Promise<VersionGroup> => {
  return getResource(path, id)
}
