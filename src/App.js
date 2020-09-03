import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { requestFirebaseNotificationPermission } from "./firebaseInit";

function App() {
  requestFirebaseNotificationPermission()
    .then((firebaseToken) => {
      // eslint-disable-next-line no-console
      console.log("token main", firebaseToken);
    })
    .catch((err) => {
      console.log(err);
      return err;
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
