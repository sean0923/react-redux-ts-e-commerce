import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import { persistRootReducer } from './rootReducer';

import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

// import thunk from 'redux-thunk';
// const middlewares = [thunk];

import { fectchCollectionStart } from './shop/shop.sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];

export const store = createStore(persistRootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fectchCollectionStart);

export const persistor = persistStore(store);
