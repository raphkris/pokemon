import type { Name, NamedApiResourceList } from '../../../types/common'

export type BerryFirmness = {
  id: number
  name: string
  berries: NamedApiResourceList[]
  names: Name[]
}
