import type { Description, NamedApiResource } from '../../../types/common'

export type Characteristic = {
  id: number
  gene_modulo: number
  possible_values: number[]
  highest_stat: NamedApiResource
  descriptions: Description[]
}
