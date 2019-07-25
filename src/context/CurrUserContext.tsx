import React from 'react';

import { firebase, firestore } from '../firebase/firebase';

import { AuthContext } from './AuthContext';

interface ValidCurrUserProps extends firebase.User {
  id?: string;
}

type CurrUserProps = ValidCurrUserProps | null;

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
  console.log('currUser: ', currUser);

  React.useEffect(() => {
    if (authPropsFromFirebase) {
      const unsubscribe = firestore
        .doc(`users/${authPropsFromFirebase.uid}`)
        .onSnapshot((snapshot) => {
          if (snapshot.exists) {
            setCurrUser({ id: snapshot.id, ...(snapshot.data() as ValidCurrUserProps) });
          }
        });

      return unsubscribe;
    } else {
      setCurrUser(null);
    }
  }, [authPropsFromFirebase]);

  return (
    <CurrUserContext.Provider value={{ currUser, setCurrUser }}>
      {children}
    </CurrUserContext.Provider>
  );
}

export { CurrUserProvider, CurrUserContext };
