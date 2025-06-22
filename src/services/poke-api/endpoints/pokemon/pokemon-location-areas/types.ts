import type { NamedApiResource, VersionEncounterDetail } from '../../../types/common'

export type LocationAreaEncounter = {
  location_area: NamedApiResource
  version_details: VersionEncounterDetail[]
}
