import React from 'react';

import { firebase, auth } from '../firebase/firebase';

interface AuthContextProps {
  authPropsFromFirebase: null | firebase.User;
  setAuthPropsFromFirebase: Function;
}

const AuthContext = React.createContext<AuthContextProps>({
  authPropsFromFirebase: null,
  setAuthPropsFromFirebase: () => {},
});

function AuthProvider({ children }: { children: JSX.Element[] | JSX.Element }) {
  const [authPropsFromFirebase, setAuthPropsFromFirebase] = React.useState<firebase.User | null>(
    null
  );

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authPropsFromFirebase) => {
      if (authPropsFromFirebase) {
        setAuthPropsFromFirebase(authPropsFromFirebase);
      } else {
        setAuthPropsFromFirebase(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ authPropsFromFirebase, setAuthPropsFromFirebase }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
