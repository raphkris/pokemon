import { getResource, listResources } from '@/services/poke-api/client'
import type { Identifier } from '@/services/poke-api/client-helpers'
import { Routes } from '@/services/poke-api/config'
import type { NamedApiResourceList } from '@/services/poke-api/types/common'
import type { BerryFirmness } from './types'

const path = Routes.Berries.BerryFirmness

export const getBerryFirmnesses = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getBerryFirmness = async (id: Identifier): Promise<BerryFirmness> => {
  return getResource(path, id)
}
