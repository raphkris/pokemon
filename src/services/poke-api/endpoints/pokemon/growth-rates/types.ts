import type { Description, NamedApiResource } from '../../../types/common'

export type GrowthRate = {
  id: number
  name: string
  formula: string
  descriptions: Description[]
  levels: GrowthRateExperienceLevel[]
  pokemon_species: NamedApiResource[]
}

export type GrowthRateExperienceLevel = {
  level: number
  experience: number
}
