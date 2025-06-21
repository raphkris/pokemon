import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { PokemonSpecies } from './types'
import { getResource, listResources } from '@/services/poke-api/client'
import { Routes } from '@/services/poke-api/config'
import type { Identifier } from '@/services/poke-api/client-helpers'

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
