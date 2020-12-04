import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectShopItems],
    collections => collections ? Object.values(collections) : []
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopItems],
    collections => collections ? collections[collectionUrlParam] : null
)