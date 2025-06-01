import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { BerryFlavor } from './types'

const path = 'berry-flavor'

export const getBerryFlavors = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getBerryFlavor = async (idOrName: number | string): Promise<BerryFlavor> => {
  return fetchData<BerryFlavor>(`${path}/${idOrName}`)
}
