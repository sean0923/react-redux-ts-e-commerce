import React from 'react';
import { connect } from 'react-redux';

import { firebase, firestore } from '../../firebase/firebase';
import { AuthContext } from '../../context/AuthContext';

import { updateUser } from '../../redux/rootActions';

import { UserReducerProps } from '../../redux/user/userReducer';

interface ValidCurrUserProps extends firebase.User {
  id?: string;
}

interface _AbstactUserReducerProps {
  updateUser: typeof updateUser;
  children: JSX.Element[] | JSX.Element;
}

function _AbstactUserReducer({ updateUser, children }: _AbstactUserReducerProps) {
  const { authPropsFromFirebase } = React.useContext(AuthContext);

  // * If authentication status change
  // * case 1. authenticated => fetch user data and populated to userReducer
  // * case 2. not authenticated => set userReducer tp {}
  React.useEffect(() => {
    if (authPropsFromFirebase) {
      const unsubscribe = firestore
        .doc(`users/${authPropsFromFirebase.uid}`)
        .onSnapshot((snapshot) => {
          if (snapshot.exists) {
            updateUser({ id: snapshot.id, ...(snapshot.data() as ValidCurrUserProps) });
          }
        });

      return unsubscribe;
    } else {
      updateUser({} as UserReducerProps);
    }
  }, [authPropsFromFirebase]);

  return <div>{children}</div>;
}

const AbstactUserReducer = connect(
  null,
  { updateUser }
)(_AbstactUserReducer);

export { AbstactUserReducer };
