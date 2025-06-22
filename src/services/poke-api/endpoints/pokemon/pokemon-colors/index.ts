import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { PokemonColor } from './types'

const path = Routes.Pokemon.PokemonColor

export const listPokemonColors = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getPokemonColor = async (id: Identifier): Promise<PokemonColor> => {
  return getResource(path, id)
}
