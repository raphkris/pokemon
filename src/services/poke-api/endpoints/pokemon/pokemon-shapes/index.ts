import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { PokemonShape } from './types'

const path = Routes.Pokemon.PokemonShape

export const listPokemonShapes = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getPokemonShape = async (id: Identifier): Promise<PokemonShape> => {
  return getResource(path, id)
}
