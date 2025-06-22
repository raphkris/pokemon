import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { Gender } from './types'

const path = Routes.Pokemon.Gender

export const listGenders = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getGender = async (id: Identifier): Promise<Gender> => {
  return getResource(path, id)
}
