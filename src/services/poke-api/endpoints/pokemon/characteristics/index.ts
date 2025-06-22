import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
import type { Characteristic } from './types'

const path = Routes.Pokemon.Characteristic

export const listCharacteristics = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getCharacteristic = async (id: Identifier): Promise<Characteristic> => {
  return getResource(path, id)
}
