import type { Name, NamedApiResourceList } from '@/services/poke-api/types/common'

export type BerryFirmness = {
  id: number
  name: string
  berries: NamedApiResourceList[]
  names: Name[]
}
