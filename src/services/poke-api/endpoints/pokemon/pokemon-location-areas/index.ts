import { getResource } from '@/services/poke-api/client'
import type { LocationAreaEncounter } from './types'
import { Routes } from '@/services/poke-api/config'
import type { Identifier } from '@/services/poke-api/client-helpers'

const path = Routes.Pokemon.PokemonLocationArea

export const getPokemonLocationAreas = async (id: Identifier): Promise<LocationAreaEncounter[]> => {
  return getResource(path.replace(':id', id.toString()))
}
