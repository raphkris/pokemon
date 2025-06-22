import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
import type { MoveLearnMethod } from './types'

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
