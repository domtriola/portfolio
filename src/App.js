import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo App-logo-1" alt="logo" />
          <img src={logo} className="App-logo App-logo-2" alt="logo" />
          <h1 className="App-title">Dominick Triola</h1>
        </header>
      </div>
    );
  }
}

export default App;
