import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import { persistRootReducer } from './rootReducer';

const middlewares = [thunk];

export const store = createStore(persistRootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
