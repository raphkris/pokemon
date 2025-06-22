import type { Name, NamedApiResource } from '../../../types/common'

export type EvolutionTrigger = {
  id: number
  name: string
  names: Name[]
  pokemon_species: NamedApiResource[]
}
