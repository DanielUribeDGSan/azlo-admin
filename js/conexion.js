var firebaseConfig = {
  apiKey: 'AIzaSyDG3zdt2E7l2eUgaSXelCoKlf3Q-9KYNDc',
  authDomain: 'azlo-52de3.firebaseapp.com',
  projectId: 'azlo-52de3',
  storageBucket: 'azlo-52de3.appspot.com',
  messagingSenderId: '1069182668594',
  appId: '1:1069182668594:web:1f0c515fec0f02ca9ad12b',
  measurementId: 'G-NRMT5B8V2G',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
