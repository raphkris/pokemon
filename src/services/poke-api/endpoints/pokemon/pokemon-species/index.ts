import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { PokemonSpecies } from './types'

const path = Routes.Pokemon.PokemonSpecies

export const listPokemonSpecies = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getPokemonSpecies = async (id: Identifier): Promise<PokemonSpecies> => {
  return getResource(path, id)
}
