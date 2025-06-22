import * as EvolutionChains from './evolution-chains'
import * as EvolutionTriggers from './evolution-triggers'

export const Endpoints = {
  GetEvolutionChain: EvolutionChains.getEvolutionChain,
  ListEvolutionChains: EvolutionChains.listEvolutionChains,
  GetEvolutionTrigger: EvolutionTriggers.getEvolutionTrigger,
  ListEvolutionTriggers: EvolutionTriggers.listEvolutionTriggers
}
