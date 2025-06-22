import type { FlavorText, NamedApiResource } from '@/services/poke-api/types/common'

export type SuperContestEffect = {
  id: number
  appeal: number
  flavor_text_entries: FlavorText[]
  moves: NamedApiResource[]
}
