import type { NamedApiResource, VersionEncounterDetail } from '@/services/poke-api/types/common'

export type LocationAreaEncounter = {
  location_area: NamedApiResource
  version_details: VersionEncounterDetail[]
}
