import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
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
