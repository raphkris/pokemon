import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { MoveBattleStyle } from './types'

const path = Routes.Moves.MoveBattleStyle

export const listMoveBattleStyles = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getMoveBattleStyle = async (id: Identifier): Promise<MoveBattleStyle> => {
  return getResource(path, id)
}
