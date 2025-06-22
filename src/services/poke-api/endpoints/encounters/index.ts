import * as EncounterConditionValues from './encounter-condition-values'
import * as EncounterConditions from './encounter-conditions'
import * as EncounterMethods from './encounter-methods'

export const Endpoints = {
  GetEncounterConditionValue: EncounterConditionValues.getEncounterConditionValue,
  ListEncounterConditionValues: EncounterConditionValues.listEncounterConditionValues,
  GetEncounterCondition: EncounterConditions.getEncounterCondition,
  ListEncounterConditions: EncounterConditions.listEncounterConditions,
  GetEncounterMethod: EncounterMethods.getEncounterMethod,
  ListEncounterMethods: EncounterMethods.listEncounterMethods
}
