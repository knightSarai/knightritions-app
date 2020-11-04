import {createStore, compose} from 'redux';
import reducer from './root.reducer';
import { persistStore } from 'redux-persist';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;

export const store = createStore(
    reducer, 
    composeEnhancers()
);

export const persistor = persistStore(store);

export default store;
