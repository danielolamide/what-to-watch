import React from 'react';
import './Question.css';

function Question(props){
    return(
        <div>
            <h4 className= 'Question'>{props.quest}</h4>
            {props.children}
        </div>
    );
}

export default Question;