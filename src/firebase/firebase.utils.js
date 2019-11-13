import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAnut17JybwhJ3vZ6aEEcYjRkExUOYNgQc',
  authDomain: 'crwn-b7aa5.firebaseapp.com',
  databaseURL: 'https://crwn-b7aa5.firebaseio.com',
  projectId: 'crwn-b7aa5',
  storageBucket: 'crwn-b7aa5.appspot.com',
  messagingSenderId: '967573039545',
  appId: '1:967573039545:web:2c0954d8820a01bff7ae68'
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // const userRef = firestore.doc('users/hc6d2PXB6QMHrIXIZECtVd9KhlZ2');
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
