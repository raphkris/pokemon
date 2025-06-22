import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { SuperContestEffect } from './types'

const path = Routes.Contests.SuperContestEffect

export const listSuperContestEffects = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getSuperContestEffect = async (id: Identifier): Promise<SuperContestEffect> => {
  return getResource(path, id)
}
