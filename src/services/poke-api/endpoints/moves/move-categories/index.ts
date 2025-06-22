import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
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
