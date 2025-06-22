import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
import type { ContestType } from './types'

const path = Routes.Contests.ContestType

export const listContestTypes = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getContestType = async (id: Identifier): Promise<ContestType> => {
  return getResource(path, id)
}
