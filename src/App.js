import React, { Component } from 'react';
import './App.css';

import Header from './sections/Header/Header';
import Projects from './sections/Projects/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Projects />
      </div>
    );
  }
}

export default App;
