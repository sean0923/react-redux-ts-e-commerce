// import { createSelector } from 'reselect';

import { RootReducerProp } from '../rootReducer';

export const selectUser = (state: RootReducerProp) => state.userReducer;
