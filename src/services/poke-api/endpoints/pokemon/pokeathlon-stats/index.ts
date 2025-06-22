import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { PokeathlonStat } from './types'

const path = Routes.Pokemon.PokeathlonStat

export const listPokeathlonStats = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getPokeathlonStat = async (id: Identifier): Promise<PokeathlonStat> => {
  return getResource(path, id)
}
