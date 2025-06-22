import type { NamedApiResource } from '@/services/poke-api/types/common'

export type ContestType = {
  id: number
  name: string
  berry_flavor: NamedApiResource
  names: ContestName[]
}

export type ContestName = {
  name: string
  color: string
  language: NamedApiResource
}
