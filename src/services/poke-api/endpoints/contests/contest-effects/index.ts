import { getResource, listResources } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { ContestEffect } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'
import type { Identifier } from '@/services/poke-api/client-helpers'

const path = PokeApiRoutes.Contests.ContestEffect

export const listContestEffects = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getContestEffect = async (id: Identifier): Promise<ContestEffect> => {
  return getResource(path, id)
}
