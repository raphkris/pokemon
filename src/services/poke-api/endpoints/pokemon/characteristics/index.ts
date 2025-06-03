import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { Characteristic } from './types'

const path = 'characteristic'

export const getCharacteristics = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getCharacteristic = async (id: number): Promise<Characteristic> => {
  return fetchData<Characteristic>(`${path}/${id}`)
}
