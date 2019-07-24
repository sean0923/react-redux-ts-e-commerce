import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer, UserReducerProps } from './user/userReducer';
import { cartReduccer, CartReducerProps } from './cart/cartReducer';

export interface RootReducerProp {
  userReducer: UserReducerProps;
  cartReduccer: CartReducerProps;
}

const persistConfig = { key: 'root', storage, whitelist: ['cartReduccer'] };

export const rootReducer = combineReducers<RootReducerProp>({ userReducer, cartReduccer });
export const persistRootReducer = persistReducer(persistConfig, rootReducer);
