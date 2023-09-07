import { initializeApp } from 'firebase/app';
import { getFirestore,} from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth'

// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

console.log(process.env.REACT_APP_FIREBASE_API_KEY)
console.log(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN)
console.log(process.env.REACT_APP_FIREBASE_PROJECT_ID)
console.log(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET)
console.log(process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,)
console.log(process.env.REACT_APP_FIREBASE_APP_ID)
console.log(process.env.REACT_APP_FIREBASE_MEASUREMENT_ID)

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)