import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { PokemonHabitat } from './types'

const path = Routes.Pokemon.PokemonHabitat

export const listPokemonHabitats = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getPokemonHabitat = async (id: Identifier): Promise<PokemonHabitat> => {
  return getResource(path, id)
}
