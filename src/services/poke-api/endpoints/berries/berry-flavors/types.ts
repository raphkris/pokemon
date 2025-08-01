import type { Name, NamedApiResource } from '../../../types/common'

export type BerryFlavor = {
  id: number
  name: string
  berries: FlavorBerryMap[]
  contest_type: NamedApiResource
  names: Name[]
}

export type FlavorBerryMap = {
  potency: number
  berry: NamedApiResource
}
