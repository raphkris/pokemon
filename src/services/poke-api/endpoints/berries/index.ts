import * as Berries from './berries'
import * as BerryFirmnesses from './berry-firmnesses'
import * as BerryFlavors from './berry-flavors'

export const Endpoints = {
  GetBerry: Berries.getBerry,
  ListBerries: Berries.listBerries,
  GetBerryFirmness: BerryFirmnesses.getBerryFirmness,
  ListBerryFirmnesses: BerryFirmnesses.listBerryFirmnesses,
  GetBerryFlavor: BerryFlavors.getBerryFlavor,
  ListBerryFlavors: BerryFlavors.listBerryFlavors
}
