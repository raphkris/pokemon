import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { MoveDamageClass } from './types'

const path = 'move-damage-class'

export const getMoveDamageClasses = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getMoveDamageClass = async (idOrName: number | string): Promise<MoveDamageClass> => {
  return fetchData<MoveDamageClass>(`${path}/${idOrName}`)
}
