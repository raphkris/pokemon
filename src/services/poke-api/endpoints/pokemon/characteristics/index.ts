import { getResource, listResources } from '@/services/poke-api/client'
import type { NamedApiResourceList } from '@/services/poke-api/types'
import type { Characteristic } from './types'
import { Routes } from '@/services/poke-api/config'
import type { Identifier } from '@/services/poke-api/client-helpers'

const path = Routes.Pokemon.Characteristic

export const getCharacteristics = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getCharacteristic = async (id: Identifier): Promise<Characteristic> => {
  return getResource(path, id)
}
