import { getResource, listResources } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { MoveLearnMethod } from './types'
import { Routes } from '@/services/poke-api/config'
import type { Identifier } from '@/services/poke-api/client-helpers'

const path = Routes.Moves.MoveLearnMethod

export const listMoveLearnMethods = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getMoveLearnMethod = async (id: Identifier): Promise<MoveLearnMethod> => {
  return getResource(path, id)
}
