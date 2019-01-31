import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Facebook from "./components/Facebook";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Facebook Authentication Example</h1>
        </header>
        <p className="App-intro">Get started by authenticating with Facebook</p>
        <Facebook />
      </div>
    );
  }
}

export default App;
