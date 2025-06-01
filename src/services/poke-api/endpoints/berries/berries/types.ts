import type { NamedApiResource } from '@/services/poke-api/types'

export type Berry = {
  id: number
  name: string
  growth_time: number
  max_harvest: number
  natural_gift_power: number
  size: number
  smoothness: number
  soil_dryness: number
  firmness: NamedApiResource
  flavors: BerryFlavorMap[]
  item: NamedApiResource
  natural_gift_type: NamedApiResource
}

export type BerryFlavorMap = {
  potency: number
  flavor: NamedApiResource
}
