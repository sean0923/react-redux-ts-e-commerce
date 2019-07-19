import { ActionTypes } from './types';

import { UserReducerProps } from '../reducers/userReducer';

export interface UpdateUserAction {
  type: ActionTypes.UPDATE_USER;
  payload: UserReducerProps;
}

export const updateUser = (currUser: UserReducerProps): UpdateUserAction => {
  return {
    type: ActionTypes.UPDATE_USER,
    payload: currUser,
  };
};

// const res: UserReducerProps = 'a';
// const res: number = 'a';
