import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'aaa', name: 'Achmed', age: 35 },
      { id: 'bbb', name: 'Bubba', age: 25 },
      { id: 'ccc', name: 'Walter', age: 55 }
    ],
    showPersons: false,
    toggleClicked: 0
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
    this.setState((prevState, props) => {
      return {
        showPersons: !shown,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
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
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            persons={this.state.persons} />
        </div>
      );
    }

    return (
      <div className="App">
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
    // Same as:
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Moro'));
  }
}

export default App;
