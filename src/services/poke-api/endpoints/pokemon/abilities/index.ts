import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { Ability } from './types'

const path = Routes.Pokemon.Ability

export const listAbilities = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getAbility = async (id: Identifier): Promise<Ability> => {
  return getResource(path, id)
}
