import firebase from 'firebase/app'
import 'firebase/auth'

let firebaseConfig = {
  apiKey: 'AIzaSyD0xJ_WqwcddljRjk0VzzV8rkVtBtQDYPE',
  authDomain: 'chamado-19f4a.firebaseapp.com',
  projectId: 'chamado-19f4a',
  storageBucket: 'chamado-19f4a.appspot.com',
  messagingSenderId: '629587336695',
  appId: '1:629587336695:web:63be01538361c3b49962f2',
  measurementId: 'G-PQ6F7XZRKF'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
