import { getResource, listResources } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { Gender } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'
import type { Identifier } from '@/services/poke-api/client-helpers'

const path = PokeApiRoutes.Pokemon.Gender

export const listGenders = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getGender = async (id: Identifier): Promise<Gender> => {
  return getResource(path, id)
}
