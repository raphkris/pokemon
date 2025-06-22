import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
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
