import { Action, ActionTypes } from '../actions/rootActions';
import { firebase } from '../../firebase/firebase';

export interface UserReducerProps extends firebase.User {
  id?: string;
}

export const userReducer = (
  state: UserReducerProps = {} as UserReducerProps,
  action: Action
): UserReducerProps => {
  switch (action.type) {
    case ActionTypes.UPDATE_USER:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
