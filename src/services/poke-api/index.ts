import { berriesEndpoints } from './endpoints/berries'
import { contestEndpoints } from './endpoints/contests'
import { encountersEndpoints } from './endpoints/encounters'
import { utilityEndpoints } from './endpoints/utility'

export const pokeApi = {
  berries: berriesEndpoints,
  contests: contestEndpoints,
  encounters: encountersEndpoints,
  utility: utilityEndpoints
}
