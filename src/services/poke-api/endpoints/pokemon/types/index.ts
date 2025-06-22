import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { PokemonType } from '../pokemon/types'

const path = Routes.Pokemon.Types

export const listPokemonTypes = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getPokemonType = async (id: Identifier): Promise<PokemonType> => {
  return getResource(path, id)
}
