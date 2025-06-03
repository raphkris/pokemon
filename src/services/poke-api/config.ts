export const API_BASE_URL = 'https://pokeapi.co/api'

const Berries = {
  Berry: 'berry',
  BerryFirmness: 'berry-firmness',
  BerryFlavor: 'berry-flavor'
} as const

const Contests = {
  ContestEffect: 'contest-effect',
  ContestType: 'contest-type',
  SuperContestEffect: 'super-contest-effect'
} as const

const Encounters = {
  EncounterConditionValue: 'encounter-condition-value',
  EncounterCondition: 'encounter-condition',
  EncounterMethod: 'encounter-method'
}

const Evolution = {
  EvolutionChain: 'evolution-chain',
  EvolutionTrigger: 'evolution-trigger'
} as const

const Games = {
  Generation: 'generation',
  Pokedex: 'pokedex',
  Version: 'version',
  VersionGroup: 'version-group'
} as const

const Items = {
  Item: 'item',
  ItemAttribute: 'item-attribute',
  ItemCategory: 'item-category',
  ItemFlingEffect: 'item-fling-effect',
  ItemPocket: 'item-pocket'
} as const

const Locations = {
  LocationArea: 'location-area',
  Location: 'location',
  PalParkArea: 'pal-park-area',
  Region: 'region'
} as const

const Machines = {
  Machine: 'machine'
} as const

const Moves = {
  MoveAilment: 'move-ailment',
  MoveBattleStyle: 'move-battle-style',
  MoveCategory: 'move-category',
  MoveDamageClass: 'move-damage-class',
  MoveLearnMethod: 'move-learn-method',
  MoveTarget: 'move-target',
  Move: 'move'
} as const

const Pokemon = {
  Ability: 'ability',
  Characteristic: 'characteristic',
  EggGroup: 'egg-group',
  Gender: 'gender',
  GrowthRate: 'growth-rate',
  Nature: 'nature',
  PokeathlonStat: 'pokeathlon-stat',
  Pokemon: 'pokemon',
  PokemonColor: 'pokemon-color',
  PokemonForm: 'pokemon-form',
  PokemonLocationArea: 'pokemon/:id/encounters',
  PokemonHabitat: 'pokemon-habitat',
  PokemonShape: 'pokemon-shape',
  PokemonSpecies: 'pokemon-species',
  Stats: 'stats',
  Types: 'types'
} as const

const Utility = {
  Language: 'language'
} as const

export const PokeApiRoutes = {
  Berries,
  Contests,
  Encounters,
  Evolution,
  Games,
  Items,
  Locations,
  Machines,
  Moves,
  Pokemon,
  Utility
}
