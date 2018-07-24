import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Hux', age: 35 },
      { name: 'Poe', age: 30 }
    ]
  }

  switchNameHandler = () => {
    console.log('Clicked');
  }

  render() {
    return (
      <div className="App">
        <h1> Moro </h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>I like hats</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I like racing</Person>
      </div>
    );
    // Same as:
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Moro'));
  }
}

export default App;
