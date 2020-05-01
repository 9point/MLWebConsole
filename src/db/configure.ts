import * as Firebase from 'firebase';
import FirebaseConfig from '../credentials/firebase-config';

export default function configure() {
  Firebase.initializeApp(FirebaseConfig);
}
