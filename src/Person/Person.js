import React from 'react';
import Radium from 'radium'
import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        <div className="person" style={style}>
            <p onClick={props.click}> {props.index+1}: I'm {props.name}, {props.age} years old</p>
            <p> {props.children} </p>
            <input type="text" onChange={props.changed} defaultValue={props.name} />
        </div>
    )
}

export default Radium(person);
