import React from "react";
import logo from './logo.svg';
import iconcast from "./assets/img/iconcast.svg"
import './App.css';

///import "../css/reset.css";

function App() {
  return (
    <div className="App">
    <text>Style-Cast</text>
    <img src={iconcast} className="App-Cast"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-Text">
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