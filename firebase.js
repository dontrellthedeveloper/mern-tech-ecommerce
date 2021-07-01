import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBhB2AxMKcOh1lTpFxdzLuytxXwc-J9VGo",
    authDomain: "mern-tech-ecommerce.firebaseapp.com",
    projectId: "mern-tech-ecommerce",
    storageBucket: "mern-tech-ecommerce.appspot.com",
    messagingSenderId: "449749457316",
    appId: "1:449749457316:web:c3cbd2bfb730c2aa880931"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();