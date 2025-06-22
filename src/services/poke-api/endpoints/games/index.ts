import * as Generations from './generations'
import * as Pokedexes from './pokedexes'
import * as Version from './version'
import * as VersionGroups from './version-groups'

export const Endpoints = {
  GetGeneration: Generations.getGeneration,
  ListGenerations: Generations.listGenerations,
  GetPokedex: Pokedexes.getPokedex,
  ListPokedexes: Pokedexes.listPokedexes,
  GetVersion: Version.getVersion,
  ListVersions: Version.listVersions,
  GetVersionGroup: VersionGroups.getVersionGroup,
  ListVersionGroups: VersionGroups.listVersionGroups
}
