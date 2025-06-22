import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { Pokemon } from './types'

const path = Routes.Pokemon.Pokemon

export const listPokemon = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getPokemon = async (id: Identifier): Promise<Pokemon> => {
  return getResource(path, id)
}
