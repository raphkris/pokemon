import { berriesEndpoints } from './endpoints/berries'
import { contestEndpoints } from './endpoints/contests'
import { utilityEndpoints } from './endpoints/utility'

export const pokeApi = {
  berries: berriesEndpoints,
  contests: contestEndpoints,
  utility: utilityEndpoints
}
