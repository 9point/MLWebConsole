import * as Firebase from 'firebase';

const CONFIG = {
  apiKey: 'AIzaSyAPVT3pL6uzG8hVgq_0DX8fI8cayF_veMs',
  authDomain: 'point-71177.firebaseapp.com',
  databaseURL: 'https://point-71177.firebaseio.com',
  projectId: 'point-71177',
  storageBucket: 'point-71177.appspot.com',
  messagingSenderId: '405559592666',
  appId: '1:405559592666:web:c534b69dc3aaaf568f07e3',
  measurementId: 'G-LN4JKMM92R',
};

export default function configure() {
  console.log('configuring');
  Firebase.initializeApp(CONFIG);
}
