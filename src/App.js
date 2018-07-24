import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Moro </h1>
        <Person name="Hux" age="35">I like hats</Person>
        <Person name="Poe" age="40"/>
      </div>
    );
    // Same as:
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Moro'));
  }
}

export default App;
