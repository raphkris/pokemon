import { getResource, listResources } from '@/services/poke-api/client'
import type { Nature } from './types'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import { PokeApiRoutes } from '@/services/poke-api/config'
import type { Identifier } from '@/services/poke-api/client-helpers'

const path = PokeApiRoutes.Pokemon.Nature

export const listNatures = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getNature = async (id: Identifier): Promise<Nature> => {
  return getResource(path, id)
}
