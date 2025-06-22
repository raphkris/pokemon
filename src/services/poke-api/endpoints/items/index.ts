import * as Item from './item'
import * as ItemAttributes from './item-attributes'
import * as ItemCategories from './item-categories'
import * as ItemFlingEffects from './item-fling-effects'
import * as ItemPockets from './item-pockets'

export const Endpoints = {
  GetItem: Item.getItem,
  ListItems: Item.listItems,
  GetItemAttribute: ItemAttributes.getItemAttribute,
  ListItemAttributes: ItemAttributes.listItemAttributes,
  GetItemCategory: ItemCategories.getItemCategory,
  ListItemCategories: ItemCategories.listItemCategories,
  GetItemFlingEffect: ItemFlingEffects.getItemFlingEffect,
  ListItemFlingEffects: ItemFlingEffects.listItemFlingEffects,
  GetItemPocket: ItemPockets.getItemPocket,
  ListItemPockets: ItemPockets.listItemPockets
}
