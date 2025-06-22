import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
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
