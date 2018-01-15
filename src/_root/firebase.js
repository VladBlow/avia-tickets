import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDI51OEWItvB5051pRLipi26sSjKUFhkDk',
  authDomain: 'avia-tickets-vc.firebaseapp.com',
  databaseURL: 'https://avia-tickets-vc.firebaseio.com',
  projectId: 'avia-tickets-vc',
  storageBucket: 'avia-tickets-vc.appspot.com',
  messagingSenderId: '802917655053',
};

firebase.initializeApp(config);

export default firebase;
