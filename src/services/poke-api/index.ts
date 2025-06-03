import { berriesEndpoints } from './endpoints/berries'
import { contestEndpoints } from './endpoints/contests'
import { encountersEndpoints } from './endpoints/encounters'
import { evolutionEndpoints } from './endpoints/evolution'
import { gamesEndpoints } from './endpoints/games'
import { itemsEndpoints } from './endpoints/items'
import { locationsEndpoints } from './endpoints/locations'
import { machinesEndpoints } from './endpoints/machines'
import { movesEndpoints } from './endpoints/moves'
import { pokemonEndpoints } from './endpoints/pokemon'
import { utilityEndpoints } from './endpoints/utility'

export const pokeApi = {
  berries: berriesEndpoints,
  contests: contestEndpoints,
  encounters: encountersEndpoints,
  evolution: evolutionEndpoints,
  games: gamesEndpoints,
  items: itemsEndpoints,
  locations: locationsEndpoints,
  machines: machinesEndpoints,
  moves: movesEndpoints,
  pokemon: pokemonEndpoints,
  utility: utilityEndpoints
}
