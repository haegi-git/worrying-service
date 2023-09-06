import { initializeApp } from 'firebase/app';
import { getFirestore,} from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth'

// TODO: Replace the following with your app's Firebase project configuration

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyDVU3Se80c6ZjThdSh8pvaD70a9L54biX8",
  authDomain: "worrying-service.firebaseapp.com",
  projectId: "worrying-service",
  storageBucket: "worrying-service.appspot.com",
  messagingSenderId: "986192499120",
  appId: "1:986192499120:web:f789216fc6618d9552c675",
  measurementId: "G-G0ST5WH0T7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)