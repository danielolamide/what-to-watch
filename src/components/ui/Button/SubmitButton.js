import React from 'react';
import {Link} from 'react-router-dom'
import './SubmitButton.css'

function SubmitButton(props){
    return(
        <div>
            <Link
                to = '/results'
                className = 'SubmitButton'
                onClick={props.clicked}
            >
                Query
            </Link>
        </div>
    );
}

export default SubmitButton;