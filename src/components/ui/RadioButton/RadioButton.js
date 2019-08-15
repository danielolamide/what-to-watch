import React from 'react';
import './RadioButton.css'

function RadioButton(props) {
    return(
        <div className= 'RadioButton' id={props.id} >
            <input type='radio'
                value={props.answer} 
                name={props.name}
                onChange={props.changed}
            />
            <label htmlFor={props.id}>
                {props.answer}
            </label>
        </div>
    );   
}

export default RadioButton;