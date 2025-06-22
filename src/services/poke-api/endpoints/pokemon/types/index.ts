import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
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
