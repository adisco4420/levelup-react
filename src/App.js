import React, { Component } from 'react';
import './App.css';
const head = 'Hello WOrld'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          {head}
        </header>
      </div>
    );
  }
}

export default App;
