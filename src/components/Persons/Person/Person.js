import React from 'react';
import PropTypes from 'prop-types';

import './Person.css';

const person = (props) => {
    return (
        <div className="person">
            <p onClick={props.click}> {props.index+1}: I'm {props.name}, {props.age} years old</p>
            <p> {props.children} </p>
            <input type="text" onChange={props.changed} defaultValue={props.name} />
        </div>
    )
}

person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
}

export default person;
