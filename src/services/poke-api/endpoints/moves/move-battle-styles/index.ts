import { getResource, listResources } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { MoveBattleStyle } from './types'
import { Routes } from '@/services/poke-api/config'
import type { Identifier } from '@/services/poke-api/client-helpers'

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
