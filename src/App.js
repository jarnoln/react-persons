import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Hux', age: 35 },
      { name: 'Poe', age: 30 }
    ],
    showPersons: false
  }

  deletePersonHandler = (index) => {
    console.log('Delete ', index);

    const persons = this.state.persons.slice();
    // const does not prevent changing list, just reassingning reference
    // slice without arguments simply copies the array
    // could also use sread to make the copy:
    // const persons = [...this.state.persons]
    persons.splice(index, 1); // Removes item from list
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    // console.log('Clicked');
    const shown = this.state.showPersons;
    this.setState({ showPersons: !shown});
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 55 },
        { name: 'Hex', age: 155 }
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => 
            <Person
              click={() => this.deletePersonHandler(index)}
              index={index}
              name={person.name}
              age={person.age}/>
          )}
        </div>
      )
    }

    return (
      <div className="App">
        <h1> Moro </h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle persons
        </button>
        {persons}
      </div>
    );
    // Same as:
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Moro'));
  }
}

export default App;
