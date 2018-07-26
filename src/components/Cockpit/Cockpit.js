import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {
    const buttonStyle = {
      color: 'white',
      backgroundColor: 'green',
      border: '2px solid black',
      padding: '8px',
      cursor: 'pointer',
    };

    if (props.showPersons) {
        buttonStyle.backgroundColor = 'red';
    }

    let classes = [];
    if (props.persons.length <= 2) {
      classes.push('red');
    }

    return (
        <div className="Cockpit">
            <h1> Moro </h1>
            <p className={classes.join(' ')}> It's alive! </p>
            <button
               style={buttonStyle}
               onClick={props.clicked}>Toggle persons
            </button>
        </div>
    );
};

export default cockpit;