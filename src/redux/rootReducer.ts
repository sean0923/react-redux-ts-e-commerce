import { combineReducers } from 'redux';

import { userReducer, UserReducerProps } from './user/userReducer';
import { cartReduccer, CartReducerProps } from './cart/cartReducer';

export interface RootReducerProp {
  userReducer: UserReducerProps;
  cartReduccer: CartReducerProps;
}

export const rootReducer = combineReducers<RootReducerProp>({ userReducer, cartReduccer });
