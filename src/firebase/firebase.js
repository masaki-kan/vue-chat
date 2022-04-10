import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDgYoUGMfanbAFDkuQl7kJiG4TDKb8grdc",
  authDomain: "vue-chat-true.firebaseapp.com",
  projectId: "vue-chat-true",
  storageBucket: "vue-chat-true.appspot.com",
  messagingSenderId: "288927046044",
  appId: "1:288927046044:web:ef3cd8904edfa3664b1059"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
