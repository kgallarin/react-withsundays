import React, { Component } from "react";
import FullPageWithOptions from "./Components/FullPage";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FullPageWithOptions />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
