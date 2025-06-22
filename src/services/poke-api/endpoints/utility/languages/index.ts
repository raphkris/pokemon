import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { Language } from './types'

const path = Routes.Utility.Language

export const listLanguages = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getLanguage = async (id: Identifier): Promise<Language> => {
  return getResource(path, id)
}
