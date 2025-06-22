import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
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
