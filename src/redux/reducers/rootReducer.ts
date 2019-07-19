import { combineReducers } from 'redux';

import { userReducer, UserReducerProps } from './userReducer';

interface CombineReducerProps {
  userReducer: UserReducerProps;
}

export const rootReducer = combineReducers<CombineReducerProps>({ userReducer });
