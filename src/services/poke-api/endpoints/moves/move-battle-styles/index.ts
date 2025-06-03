import { fetchData } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { MoveBattleStyle } from './types'
import { PokeApiRoutes } from '@/services/poke-api/config'

const path = PokeApiRoutes.Moves.MoveBattleStyle

export const getMoveBattleStyles = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getMoveBattleStyle = async (idOrName: number | string): Promise<MoveBattleStyle> => {
  return fetchData<MoveBattleStyle>(`${path}/${idOrName}`)
}
