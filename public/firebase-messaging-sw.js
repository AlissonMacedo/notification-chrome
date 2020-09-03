importScripts("https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js"
);

const config = {
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

messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: "/firebase-logo.png",
  };
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

self.addEventListener("notificationclick", (event) => {
  console.log(event);
  return event;
});
