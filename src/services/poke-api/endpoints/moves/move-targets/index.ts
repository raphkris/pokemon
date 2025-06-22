import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
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
