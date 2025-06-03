import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { PokemonForm } from './types'

const path = 'pokemon-form'

export const getPokemonForms = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getPokemonForm = async (idOrName: number | string): Promise<PokemonForm> => {
  return fetchData<PokemonForm>(`${path}/${idOrName}`)
}
