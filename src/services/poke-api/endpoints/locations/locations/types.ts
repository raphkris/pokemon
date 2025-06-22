import type { GenerationGameIndex, Name, NamedApiResource } from '../../../types/common'

export type Location = {
  id: number
  name: string
  region: NamedApiResource
  names: Name[]
  game_indices: GenerationGameIndex[]
  areas: NamedApiResource
}
