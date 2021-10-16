import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_KEY,
    authDomain: "apartly-react.firebaseapp.com",
    projectId: "apartly-react",
    storageBucket: "apartly-react.appspot.com",
    messagingSenderId: process.env.REACT_APP_SENDER_ID,
    appId: process.env.REACT_APP_ID
};

export const firebase = initializeApp(firebaseConfig);