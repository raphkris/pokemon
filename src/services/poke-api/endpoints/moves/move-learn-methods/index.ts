import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
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
