import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import { persistRootReducer } from './rootReducer';

import createSagaMiddleware from 'redux-saga';

// import thunk from 'redux-thunk';
// const middlewares = [thunk];
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = createStore(persistRootReducer, applyMiddleware(...middlewares));

// sagaMiddleware.run();

export const persistor = persistStore(store);
