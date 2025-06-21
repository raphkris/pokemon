import { getResource, listResources } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { SuperContestEffect } from './types'
import { Routes } from '@/services/poke-api/config'
import type { Identifier } from '@/services/poke-api/client-helpers'

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
