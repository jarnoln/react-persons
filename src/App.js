import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Moro </h1>
      </div>
    );
    // Same as:
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Moro'));
  }
}

export default App;
