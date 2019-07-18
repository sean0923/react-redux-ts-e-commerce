import React from 'react';

import { firebase, firestore } from '../firebase/firebase';
import { useFirebaseAuth } from '../hooks/useFirebaseAuth';

interface ValidCurrUserProps extends firebase.UserInfo {
  id?: string;
}

type CurrUserProps = ValidCurrUserProps | null;

type FirebaseDocRef = firebase.firestore.DocumentReference;

interface CurrUserContextProps {
  currUser: CurrUserProps;
  toggleSignInStatus(): void;
}
const CurrUserContext = React.createContext<CurrUserContextProps>({
  currUser: null,
  toggleSignInStatus: () => {},
});

function CurrUserProvider({ children }: { children: JSX.Element[] | JSX.Element }) {
  const { authPropsFromFirebase, toggleSignInStatus } = useFirebaseAuth();

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
    <CurrUserContext.Provider value={{ currUser, toggleSignInStatus }}>
      {children}
    </CurrUserContext.Provider>
  );
}

export { CurrUserProvider, CurrUserContext };

const createUserThenGetUserRef: (
  authPropsFromFirebase: firebase.UserInfo
) => Promise<FirebaseDocRef | undefined> = async (authPropsFromFirebase) => {
  if (!authPropsFromFirebase) {
    return;
  }

  const userRef = firestore.doc(`users/${authPropsFromFirebase.uid}`);
  const snapshot = await userRef.get();

  const noUserInDB = !snapshot.exists;

  if (noUserInDB) {
    const { displayName, email } = authPropsFromFirebase;
    const createdAt = new Date();

    try {
      userRef.set({ displayName, email, createdAt });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }

  return userRef;
};
