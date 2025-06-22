import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { MoveCategory } from './types'

const path = Routes.Moves.MoveCategory

export const listMoveCategories = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getMoveCategory = async (id: Identifier): Promise<MoveCategory> => {
  return getResource(path, id)
}
