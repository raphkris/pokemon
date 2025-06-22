import * as MoveAilments from './move-ailments'
import * as MoveBattleStyles from './move-battle-styles'
import * as MoveCategories from './move-categories'
import * as MoveDamageClasses from './move-damage-classes'
import * as MoveLearnMethods from './move-learn-methods'
import * as MoveTargets from './move-targets'
import * as Moves from './moves'

export const Endpoints = {
  GetMoveAilment: MoveAilments.getMoveAilment,
  ListMoveAilments: MoveAilments.listMoveAilments,
  GetMoveBattleStyle: MoveBattleStyles.getMoveBattleStyle,
  ListMoveBattleStyles: MoveBattleStyles.listMoveBattleStyles,
  GetMoveCategory: MoveCategories.getMoveCategory,
  ListMoveCategories: MoveCategories.listMoveCategories,
  GetMoveDamageClass: MoveDamageClasses.getMoveDamageClass,
  ListMoveDamageClasses: MoveDamageClasses.listMoveDamageClasses,
  GetMoveLearnMethod: MoveLearnMethods.getMoveLearnMethod,
  ListMoveLearnMethods: MoveLearnMethods.listMoveLearnMethods,
  GetMoveTarget: MoveTargets.getMoveTarget,
  ListMoveTargets: MoveTargets.listMoveTargets,
  GetMove: Moves.getMove,
  ListMoves: Moves.listMoves
}
