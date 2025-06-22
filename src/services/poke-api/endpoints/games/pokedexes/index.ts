import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
import type { Pokedex } from './types'

const path = Routes.Games.Pokedex

export const listPokedexes = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getPokedex = async (id: Identifier): Promise<Pokedex> => {
  return getResource(path, id)
}
