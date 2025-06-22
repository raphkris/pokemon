import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
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
