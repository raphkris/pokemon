import { fetchData } from '@/services/poke-api/client'
import type { Ability, NamedApiResourceList } from '@/services/poke-api/types'

const path = 'ability'

export const getAbilities = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getAbility = async (idOrName: number | string): Promise<Ability> => {
  return fetchData<Ability>(`${path}/${idOrName}`)
}
