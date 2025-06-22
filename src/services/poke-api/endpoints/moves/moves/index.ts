import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { Move } from './types'

const path = Routes.Moves.Move

export const listMoves = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getMove = async (id: Identifier): Promise<Move> => {
  return getResource(path, id)
}
