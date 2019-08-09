import React from 'react';
import RadioButton from './RadioButton/RadioButton';
import './RadioGroup.css';

function RadioGroup(props){
    return(
        <div className='RadioGroup'>
        {props.choices.map((answer,index)=>{
            return(
                <RadioButton id={index} name={answer}/>
            )
        })}
        </div>
    );
}

export default RadioGroup;