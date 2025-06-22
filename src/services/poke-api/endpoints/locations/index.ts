import * as LocationAreas from './location-areas'
import * as Locations from './locations'
import * as PalParkAreas from './pal-park-areas'
import * as Regions from './regions'

export const Endpoints = {
  GetLocationArea: LocationAreas.getLocationArea,
  ListLocationAreas: LocationAreas.listLocationAreas,
  GetLocation: Locations.getLocation,
  ListLocations: Locations.listLocations,
  GetPalParkArea: PalParkAreas.getPalParkArea,
  ListPalParkAreas: PalParkAreas.listPalParkAreas,
  GetRegion: Regions.getRegion,
  ListRegions: Regions.listRegions
}
