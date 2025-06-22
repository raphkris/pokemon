import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { ContestEffect } from './types'

const path = Routes.Contests.ContestEffect

export const listContestEffects = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getContestEffect = async (id: Identifier): Promise<ContestEffect> => {
  return getResource(path, id)
}
