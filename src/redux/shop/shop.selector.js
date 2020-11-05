import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectShopItems],
    collections => Object.values(collections)
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopItems],
    collections => collections[collectionUrlParam]
)