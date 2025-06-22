import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { Generation } from './types'

const path = Routes.Games.Generation

export const listGenerations = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getGeneration = async (id: Identifier): Promise<Generation> => {
  return getResource(path, id)
}
