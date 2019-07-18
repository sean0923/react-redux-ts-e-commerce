import React from 'react';

import { firebase, createUserThenGetUserRef } from '../firebase/firebase';

import { AuthContext } from './AuthContext';

interface ValidCurrUserProps extends firebase.User {
  id?: string;
}

type CurrUserProps = ValidCurrUserProps | null;

type FirebaseDocRef = firebase.firestore.DocumentReference;

interface CurrUserContextProps {
  currUser: CurrUserProps;
  setCurrUser: Function;
}

const CurrUserContext = React.createContext<CurrUserContextProps>({
  currUser: null,
  setCurrUser: () => {},
});

function CurrUserProvider({ children }: { children: JSX.Element[] | JSX.Element }) {
  const { authPropsFromFirebase } = React.useContext(AuthContext);
  const [currUser, setCurrUser] = React.useState<CurrUserProps>(null);

  React.useEffect(() => {
    let unsubscribe: null | Function = null;

    if (authPropsFromFirebase) {
      createUserThenGetUserRef(authPropsFromFirebase).then(
        (userRef: FirebaseDocRef | undefined) => {
          if (userRef) {
            unsubscribe = userRef.onSnapshot((snapshot) => {
              const validData = snapshot.data() as ValidCurrUserProps;
              setCurrUser({ id: snapshot.id, ...validData });
            });
          }
        }
      );
    } else {
      setCurrUser(null);
    }

    if (unsubscribe) {
      return unsubscribe;
    }
  }, [authPropsFromFirebase]);

  return (
    <CurrUserContext.Provider value={{ currUser, setCurrUser }}>
      {children}
    </CurrUserContext.Provider>
  );
}

export { CurrUserProvider, CurrUserContext };
