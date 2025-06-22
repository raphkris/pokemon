import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { Version } from './types'

const path = Routes.Games.Version

export const listVersions = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getVersion = async (id: Identifier): Promise<Version> => {
  return getResource(path, id)
}
