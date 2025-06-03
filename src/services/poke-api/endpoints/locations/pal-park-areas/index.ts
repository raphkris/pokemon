import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { PalParkArea } from './types'

const path = 'pal-park-area'

export const getPalParkAreas = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getPalParkArea = async (idOrName: number | string): Promise<PalParkArea> => {
  return fetchData<PalParkArea>(`${path}/${idOrName}`)
}
