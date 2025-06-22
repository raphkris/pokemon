import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
import type { PokemonForm } from './types'

const path = Routes.Pokemon.PokemonForm

export const listPokemonForms = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getPokemonForm = async (id: Identifier): Promise<PokemonForm> => {
  return getResource(path, id)
}
