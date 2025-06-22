import * as Abilities from './abilities'
import * as Characteristics from './characteristics'
import * as EggGroups from './egg-groups'
import * as Genders from './genders'
import * as GrowthRates from './growth-rates'
import * as Natures from './natures'
import * as PokeathlonStats from './pokeathlon-stats'
import * as Pokemon from './pokemon'
import * as PokemonColors from './pokemon-colors'
import * as PokemonForms from './pokemon-forms'
import * as PokemonHabitats from './pokemon-habitats'
import * as PokemonLocationAreas from './pokemon-location-areas'
import * as PokemonShapes from './pokemon-shapes'
import * as PokemonSpecies from './pokemon-species'
import * as Stats from './stats'
import * as Types from './types'

export const Endpoints = {
  GetAbility: Abilities.getAbility,
  ListAbilities: Abilities.listAbilities,
  GetCharacteristic: Characteristics.getCharacteristic,
  ListCharacteristics: Characteristics.listCharacteristics,
  GetEggGroup: EggGroups.getEggGroup,
  ListEggGroups: EggGroups.listEggGroups,
  GetGender: Genders.getGender,
  ListGenders: Genders.listGenders,
  GetGrowthRate: GrowthRates.getGrowthRate,
  ListGrowthRates: GrowthRates.listGrowthRates,
  GetNature: Natures.getNature,
  ListNatures: Natures.listNatures,
  GetPokeathlonStat: PokeathlonStats.getPokeathlonStat,
  ListPokeathlonStats: PokeathlonStats.listPokeathlonStats,
  GetPokemon: Pokemon.getPokemon,
  ListPokemon: Pokemon.listPokemon,
  GetPokemonColor: PokemonColors.getPokemonColor,
  ListPokemonColors: PokemonColors.listPokemonColors,
  GetPokemonForm: PokemonForms.getPokemonForm,
  ListPokemonForms: PokemonForms.listPokemonForms,
  GetPokemonHabitat: PokemonHabitats.getPokemonHabitat,
  ListPokemonHabitats: PokemonHabitats.listPokemonHabitats,
  GetPokemonLocationAreas: PokemonLocationAreas.getPokemonLocationAreas,
  GetPokemonShape: PokemonShapes.getPokemonShape,
  ListPokemonShapes: PokemonShapes.listPokemonShapes,
  GetPokemonSpecies: PokemonSpecies.getPokemonSpecies,
  ListPokemonSpecies: PokemonSpecies.listPokemonSpecies,
  GetStat: Stats.getStat,
  ListStats: Stats.listStats,
  GetPokemonType: Types.getPokemonType,
  ListPokemonTypes: Types.listPokemonTypes
}
