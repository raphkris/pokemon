import { getResource, listResources } from '../../../client'
import type { Identifier } from '../../../client-helpers'
import { Routes } from '../../../config'
import type { NamedApiResourceList } from '../../../types/common'
import type { Machine } from './types'

const path = Routes.Machines.Machine

export const listMachines = async (
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  return listResources(path, limit, offset)
}

export const getMachine = async (id: Identifier): Promise<Machine> => {
  return getResource(path, id)
}
