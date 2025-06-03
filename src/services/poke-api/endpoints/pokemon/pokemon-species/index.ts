import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { PokemonSpecies } from './types'
import { fetchData } from '@/services/poke-api/client'

const path = 'pokemon-species'

/**
 * Fetches a paginated list of Pokémon species or a single Pokémon species by id or name.
 *
 * - getPokemonSpecies(limit, offset) → paginated list
 * - getPokemonSpecies(idOrName) → single Pokémon species
 */
export const getPokemonSpecies = (
  arg1: number | string,
  arg2?: number
): Promise<NamedApiResourceList | PokemonSpecies> => {
  if (typeof arg1 === 'number' && typeof arg2 !== 'undefined') {
    // getPokemonSpecies(limit, offset)
    return fetchData<NamedApiResourceList>(path, { limit: arg1, offset: arg2 })
  } else {
    // getPokemonSpecies(idOrName)
    return fetchData<PokemonSpecies>(`${path}/${arg1}`)
  }
}
