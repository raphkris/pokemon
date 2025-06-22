import type { Name, NamedApiResource } from '../../../types/common'

export type PokeathlonStat = {
  id: number
  name: string
  names: Name[]
  affecting_natures: NaturePokeathlonStatAffectSets
}

export type NaturePokeathlonStatAffectSets = {
  increase: NaturePokeathlonStatAffect[]
  decrease: NaturePokeathlonStatAffect[]
}

export type NaturePokeathlonStatAffect = {
  max_change: number
  nature: NamedApiResource
}
