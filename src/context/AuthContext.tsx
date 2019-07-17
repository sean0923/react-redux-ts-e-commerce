import React from 'react';
import { firebase, auth, signInWithGoogle, firestore } from '../firebase/firebase';

interface AuthProps {
  authState: firebase.UserInfo | null;
  toggleAuthState: () => void;
}

const AuthContext = React.createContext<AuthProps>({
  authState: null,
  toggleAuthState: () => {},
});

function AuthProvider({ children }: { children: JSX.Element[] | JSX.Element }) {
  const [authState, setAuthState] = React.useState<firebase.UserInfo | null>(null);

  const toggleAuthState = () => {
    if (authState) {
      auth.signOut();
    } else {
      signInWithGoogle();
    }
  };

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authState) => {
      if (authState) {
        setAuthState(authState);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ authState, toggleAuthState }}>{children}</AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
