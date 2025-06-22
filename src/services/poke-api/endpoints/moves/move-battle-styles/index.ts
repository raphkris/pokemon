import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
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
