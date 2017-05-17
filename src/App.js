import React, { Component } from 'react';
import './App.css';
import Browser from './Browser.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Browser url="https://en.wikivoyage.org/wiki/Bolzano" />
      </div>
    );
  }
}

export default App;
