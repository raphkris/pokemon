import { getResource, listResources } from '@/services/poke-api/client'
import { PokeApiRoutes } from '@/services/poke-api/config'
import type { Ability, NamedApiResourceList } from '@/services/poke-api/types'
import type { Identifier } from '@/services/poke-api/client-helpers'

const path = PokeApiRoutes.Pokemon.Ability

export const listAbilities = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getAbility = async (id: Identifier): Promise<Ability> => {
  return getResource(path, id)
}
