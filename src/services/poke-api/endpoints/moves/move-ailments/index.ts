import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { MoveAilment } from './types'

const path = Routes.Moves.MoveAilment

export const listMoveAilments = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getMoveAilment = async (id: Identifier): Promise<MoveAilment> => {
  return getResource(path, id)
}
