import React from 'react';
import logo from "./logo.svg";
import "./App.scss";
import { HomePage } from "./home-page/HomePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React - {process.env.NODE_ENV} -{" "}
          {process.env.REACT_APP_NOT_SECRET_CODE}
          <HomePage />
        </a>
      </header>
    </div>
  );
}

export default App;
