import { getResource } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { LocationAreaEncounter } from './types'

const path = Routes.Pokemon.PokemonLocationArea

export const getPokemonLocationAreas = async (id: Identifier): Promise<LocationAreaEncounter[]> => {
  return getResource(path.replace(':id', id.toString()))
}
