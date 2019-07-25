import { UserAction, UserActionTypes } from '../rootActions';
import { firebase } from '../../firebase/firebase';

export interface UserReducerProps extends firebase.UserInfo {
  id?: string;
}

export const userReducer = (
  state: UserReducerProps = {} as UserReducerProps,
  action: UserAction
): UserReducerProps => {
  switch (action.type) {
    case UserActionTypes.UPDATE_USER:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
