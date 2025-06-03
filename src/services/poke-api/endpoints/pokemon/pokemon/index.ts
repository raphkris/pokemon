import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { Pokemon } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'

const path = PokeApiRoutes.Pokemon.Pokemon

/**
 * Fetches a paginated list of Pokémon or a single Pokémon by id or name.
 *
 * - getPokemon(limit, offset) → paginated list
 * - getPokemon(idOrName) → single Pokémon
 */
export const getPokemon = (
  arg1: number | string,
  arg2?: number
): Promise<NamedApiResourceList | Pokemon> => {
  if (typeof arg1 === 'number' && typeof arg2 !== 'undefined') {
    // getPokemon(limit, offset)
    return fetchData<NamedApiResourceList>(path, { limit: arg1, offset: arg2 })
  } else {
    // getPokemon(idOrName)
    return fetchData<Pokemon>(`${path}/${arg1}`)
  }
}
