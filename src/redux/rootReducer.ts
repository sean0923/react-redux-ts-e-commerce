import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer, UserReducerProps } from './user/userReducer';
import { cartReduccer, CartReducerProps } from './cart/cartReducer';
import { directoryReducer, DirectoryReducerProps } from './directory/directoryReducer';
import { shopReducer, ShopReducerProps } from './shop/shopReducer';

export interface RootReducerProp {
  userReducer: UserReducerProps;
  cartReduccer: CartReducerProps;
  directoryReducer: DirectoryReducerProps;
  shopReducer: ShopReducerProps;
}

const persistConfig = { key: 'root', storage, whitelist: ['cartReduccer'] };

export const rootReducer = combineReducers<RootReducerProp>({
  userReducer,
  cartReduccer,
  directoryReducer,
  shopReducer,
});
export const persistRootReducer = persistReducer(persistConfig, rootReducer);
