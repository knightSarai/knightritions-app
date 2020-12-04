import collection from '../../pages/collection';
import {UPDATE_COLLECTIONS} from './shop.types';

export const updateCollections = collectionMap => ({
    type: UPDATE_COLLECTIONS,
    payload: collectionMap
});