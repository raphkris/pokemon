import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { MoveTarget } from './types'

const path = Routes.Moves.MoveTarget

export const listMoveTargets = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getMoveTarget = async (id: Identifier): Promise<MoveTarget> => {
  return getResource(path, id)
}
