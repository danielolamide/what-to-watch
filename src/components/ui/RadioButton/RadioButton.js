import React from 'react';

function RadioButton(props) {
    return(
        <div>
            <input type='radio' id={props.id} value={props.answer} name={props.name}/>
            <label htmlFor={props.id}>{props.answer}</label>
        </div>
    );   
}

export default RadioButton;