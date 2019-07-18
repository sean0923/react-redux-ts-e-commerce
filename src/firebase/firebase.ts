import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

import { firebaseConfig } from '../config/firebase-config';

type FirebaseDocRef = firebase.firestore.DocumentReference;

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => auth.signInWithPopup(provider);

interface AdditionalProps {
  displayName: string;
}

const createUserThenGetUserRef: (
  authPropsFromFirebase: firebase.UserInfo,
  additionalProps?: AdditionalProps
) => Promise<FirebaseDocRef | undefined> = async (authPropsFromFirebase, additionalProps) => {
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
      userRef.set({ displayName, email, createdAt, ...additionalProps });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }

  return userRef;
};

export { firebase, auth, firestore, signInWithGoogle, createUserThenGetUserRef };
