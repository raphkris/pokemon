import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
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
