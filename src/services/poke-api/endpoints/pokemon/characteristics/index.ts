import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
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
