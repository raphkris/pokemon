import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { Pokedex } from './types'

const path = Routes.Games.Pokedex

export const listPokedexes = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getPokedex = async (id: Identifier): Promise<Pokedex> => {
  return getResource(path, id)
}
