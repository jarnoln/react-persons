import React from 'react'
import Person from './Person/Person.js';

const persons = (props) => props.persons.map((person, index) => 
        <Person
          key={person.id}
          click={() => props.clicked(index)}
          changed={(event) => props.changed(event, person.id)}
          index={index}
          name={person.name}
          age={person.age}/>
);

export default persons