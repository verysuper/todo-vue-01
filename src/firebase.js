import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyAXTUahHYu-n7nag5tniz7boM0C8Wuba1U",
  authDomain: "todos-f371d.firebaseapp.com",
  databaseURL: "https://todos-f371d.firebaseio.com",
  projectId: "todos-f371d",
  storageBucket: "todos-f371d.appspot.com",
  messagingSenderId: "171785270346",
  appId: "1:171785270346:web:e0880dabc990de25be22b3",
  measurementId: "G-BYR2MXFMY2"
};

const firebaseApp = firebase.initializeApp(config)

const firestore = firebaseApp.firestore()
// firestore.settings({ timestampsInSnapshots: true })

export default firestore
