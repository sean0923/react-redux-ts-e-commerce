import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

import { firebaseConfig } from '../config/firebase-config';

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => auth.signInWithPopup(provider);

export { firebase, auth, firestore, signInWithGoogle };
