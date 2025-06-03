import { fetchData } from '@/services/poke-api/client'
import type { LocationAreaEncounter } from './types'

const pokemon = 'pokemon'
const path = 'encounters'

export const getPokemonLocationAreas = async (
  idOrName: number | string
): Promise<LocationAreaEncounter[]> => {
  return fetchData<LocationAreaEncounter[]>(`${pokemon}/${idOrName}/${path}`)
}
