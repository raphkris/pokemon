import { Routes } from '@/services/poke-api/config'
import { getResource, listResources } from '../../../client'
import type { NamedApiResourceList } from '../../../types'
import type { Language } from './types'
import type { Identifier } from '@/services/poke-api/client-helpers'

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
