import React from 'react';

function RadioButton(props) {
    return(
        <div>
            <input type='radio' id={props.id} value={props.name}/>
            <label for={props.id}>{props.name}</label>
        </div>
    );   
}

export default RadioButton;