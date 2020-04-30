import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCA051RMCnV9KcT7LgeINo9Eq4INXPzff0",
  authDomain: "crwn-db-a7670.firebaseapp.com",
  databaseURL: "https://crwn-db-a7670.firebaseio.com",
  projectId: "crwn-db-a7670",
  storageBucket: "crwn-db-a7670.appspot.com",
  messagingSenderId: "861285476211",
  appId: "1:861285476211:web:527d29b9680417418d4706",
  measurementId: "G-FDMY1LBT6N"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase