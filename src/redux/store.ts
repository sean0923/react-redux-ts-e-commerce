import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

// import { rootReducer } from './rootReducer';
import { persistRootReducer } from './rootReducer';

const middlewares = [logger];

export const store = createStore(persistRootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
