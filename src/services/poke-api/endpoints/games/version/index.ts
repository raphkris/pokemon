import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
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
