import { getResource, listResources } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { BerryFlavor } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'
import type { Identifier } from '@/services/poke-api/client-helpers'

const path = PokeApiRoutes.Berries.BerryFlavor

export const getBerryFlavors = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getBerryFlavor = async (id: Identifier): Promise<BerryFlavor> => {
  return getResource(path, id)
}
