import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";

const App = () => {
  const logHelloWorld8Times = () => {
    for (let i = 0; i < 8; i++) {
      console.log("Hello World");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button label="This is my button" onClick={logHelloWorld8Times} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
