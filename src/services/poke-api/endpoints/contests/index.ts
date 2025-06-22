import * as ContestEffects from './contest-effects'
import * as ContestTypes from './contest-types'
import * as SuperContestEffects from './super-contest-effects'

export const Endpoints = {
  GetContestEffect: ContestEffects.getContestEffect,
  ListContestEffects: ContestEffects.listContestEffects,
  GetContestType: ContestTypes.getContestType,
  ListContentType: ContestTypes.listContestTypes,
  GetSuperContestEffect: SuperContestEffects.getSuperContestEffect,
  ListSuperContestEffects: SuperContestEffects.listSuperContestEffects
}
