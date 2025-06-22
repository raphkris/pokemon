import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
import type { MoveDamageClass } from './types'

const path = Routes.Moves.MoveDamageClass

export const listMoveDamageClasses = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getMoveDamageClass = async (id: Identifier): Promise<MoveDamageClass> => {
  return getResource(path, id)
}
