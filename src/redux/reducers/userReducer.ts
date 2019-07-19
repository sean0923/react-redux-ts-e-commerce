import { Action, ActionTypes } from '../actions/rootActions';
import { firebase } from '../../firebase/firebase';

export interface UserProps extends firebase.User {
  id?: string;
}

export type UserReducerProps = UserProps | {};

export const userReducer = (state: UserReducerProps = {}, action: Action): UserReducerProps => {
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
