import { fetchData } from '../../../client'
import type { NamedApiResourceList } from '../../../types'
import type { Language } from './types'

const path = 'language'

export const getLanguages = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList> => {
  return fetchData<NamedApiResourceList>(path, { limit, offset })
}

export const getLanguage = async (idOrName: number | string): Promise<Language> => {
  return fetchData<Language>(`${path}/${idOrName}`)
}
