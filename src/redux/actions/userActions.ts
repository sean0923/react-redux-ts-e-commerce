import { ActionTypes } from './types';

import { UserReducerProps } from '../reducers/userReducer';

export interface UpdateUserAction {
  type: ActionTypes.UPDATE_USER;
  payload: UserReducerProps;
}

export const updateUser = (currUser: string): UpdateUserAction => {
  return {
    type: ActionTypes.UPDATE_USER,
    payload: currUser,
  };
};
