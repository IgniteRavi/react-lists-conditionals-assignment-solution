import React from 'react';
import './ValidationComponent.css';

export const ValidationComponent = (props) => {

    let element = <p>Valid Text entered</p>;
    if(props.inputValue.length > props.maxLength){
        element = <p>Length exceeds. Allowed limit is {props.maxLength}, and actual text size is {props.inputValue.length} </p>
    } 
    return (
        <div className="ValidationComponent">
            <p>Current Length : {props.inputValue.length},   <b>Max Length:{props.maxLength}</b></p>
            {element}
        </div>
    );
}