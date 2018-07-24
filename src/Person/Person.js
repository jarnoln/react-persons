import React from 'react'

const person = (props) => {
    return (
        <div>
            <p>I'm {props.name}, {props.age} years old</p>
            <p> {props.children} </p>
            <input type="text" onChange={props.changed} />
        </div>
    )
}

export default person;
