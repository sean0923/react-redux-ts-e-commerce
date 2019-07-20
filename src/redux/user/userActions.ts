import { UserActionTypes } from './userActionTypes';

import { UserReducerProps } from './userReducer';

export interface UpdateUserAction {
  type: UserActionTypes.UPDATE_USER;
  payload: UserReducerProps;
}

export const updateUser = (currUser: UserReducerProps): UpdateUserAction => {
  return {
    type: UserActionTypes.UPDATE_USER,
    payload: currUser,
  };
};
