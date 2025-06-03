import { fetchData } from '@/services/poke-api/client'
import type { LocationAreaEncounter } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'

const path = PokeApiRoutes.Pokemon.PokemonLocationArea

export const getPokemonLocationAreas = async (
  idOrName: number | string
): Promise<LocationAreaEncounter[]> => {
  return fetchData<LocationAreaEncounter[]>(path.replace(':id', idOrName.toString()))
}
