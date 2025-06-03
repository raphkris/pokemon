import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { Gender } from './types'

const path = 'gender'

export const getGenders = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getGender = async (idOrName: number | string): Promise<Gender> => {
  return fetchData<Gender>(`${path}/${idOrName}`)
}
