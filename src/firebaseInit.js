import firebase from "firebase/app";
import "firebase/messaging";

var config = {
  apiKey: "AIzaSyBHtbw-gdq08y-nh1UpEydg1Lz6KFKPXlg",
  authDomain: "projetoteste-4df1c.firebaseapp.com",
  databaseURL: "https://projetoteste-4df1c.firebaseio.com",
  projectId: "projetoteste-4df1c",
  storageBucket: "projetoteste-4df1c.appspot.com",
  messagingSenderId: "167319932910",
  appId: "1:167319932910:web:454fa6a309b4ac1247c8ff",
  measurementId: "G-7BPEF8QQNB",
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

// next block of code goes here
export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
