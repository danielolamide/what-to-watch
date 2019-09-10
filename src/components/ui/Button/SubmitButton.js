import React from 'react';
import './SubmitButton.css'

function SubmitButton(props){
    return(
        <div>
            <button
                className = 'SubmitButton'  
                type='button'
                onClick={props.clicked}
            >
                Query
            </button>
        </div>
    );
}

export default SubmitButton;