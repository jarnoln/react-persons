import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from '../components/Persons/Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { id: 'aaa', name: 'Achmed', age: 35 },
      { id: 'bbb', name: 'Bubba', age: 25 },
      { id: 'ccc', name: 'Walter', age: 55 }
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

  nameChangedHandler = (event, id) => {
    const persons = [...this.state.persons]; // copy of persons array
    const index = persons.findIndex(p => p.id === id);
    // const person = {...this.state.persons[index]};  // copy of person object in list
    const person = persons[index];
    person.name = event.target.value;
    this.setState({
      persons: persons
    });
  }

  render() {
    const buttonStyle = {
      color: 'white',
      backgroundColor: 'green',
      border: '2px solid black',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => 
            <Person
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              index={index}
              name={person.name}
              age={person.age}/>
          )}
        </div>
      );

      buttonStyle.backgroundColor = 'red';
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    return (
      <div className="App">
        <h1> Moro </h1>
        <p className={classes.join(' ')}> It's alive! </p>
        <button
          style={buttonStyle}
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
