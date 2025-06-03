import type { Description, NamedApiResource } from '@/services/poke-api/types'

export type Characteristic = {
  id: number
  gene_modulo: number
  possible_values: number[]
  highest_stat: NamedApiResource
  descriptions: Description[]
}
