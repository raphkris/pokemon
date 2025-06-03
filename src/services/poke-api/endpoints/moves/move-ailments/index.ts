import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { MoveAilment } from './types'

const path = 'move-ailment'

export const getMoveAilments = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getMoveAilment = async (idOrName: number | string): Promise<MoveAilment> => {
  return fetchData<MoveAilment>(`${path}/${idOrName}`)
}
