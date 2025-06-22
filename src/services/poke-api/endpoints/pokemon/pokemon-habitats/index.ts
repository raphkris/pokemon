import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
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
