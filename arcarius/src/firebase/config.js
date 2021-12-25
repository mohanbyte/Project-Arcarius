import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC4GC0Bs1cghTnQETy_MlPu8L3cLgI4yLk",
    authDomain: "myarcarius.firebaseapp.com",
    projectId: "myarcarius",
    storageBucket: "myarcarius.appspot.com",
    messagingSenderId: "791376723041",
    appId: "1:791376723041:web:67abc0a533b43bcbcdbe20"
  };
//init firebase
firebase.initializeApp(firebaseConfig)
//init service
const projectFirestore= firebase.firestore()
const projectAuth= firebase.auth()
const timestamp = firebase.firestore.Timestamp
export { projectFirestore , projectAuth , timestamp }