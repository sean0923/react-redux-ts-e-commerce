import React from 'react';
import { firebase, auth, signInWithGoogle } from '../firebase/firebase';

interface AuthProps {
  authState: null | firebase.User;
  toggleAuthState: () => void;
}

const AuthContext = React.createContext<AuthProps>({ authState: null, toggleAuthState: () => {} });

function AuthProvider({ children }: { children: JSX.Element[] | JSX.Element }) {
  const [authState, setAuthState] = React.useState<null | firebase.User>(null);

  const toggleAuthState = () => {
    if (authState) {
      auth.signOut();
    } else {
      signInWithGoogle();
    }
  };

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authState) => {
      console.log('authState: ', authState);
      setAuthState(authState);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ authState, toggleAuthState }}>{children}</AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
