import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="person">
            <p>I'm {props.name}, {props.age} years old</p>
            <p> {props.children} </p>
            <input type="text" onChange={props.changed} defaultValue={props.name} />
        </div>
    )
}

export default person;
