import React, { Component } from 'react';
import RadioButton from './RadioButton/RadioButton';
import './RadioGroup.css';


class RadioGroup extends Component{
    state = {
        selectedValues : {}
    };

    radioClick= (e)=>{
       
       
    }
    
    render(){
        return(
            <div className='RadioGroup' ref="r_group" data-question-no={this.props.questionNo}>
            {

                this.props.choices.map((answer,index)=>{
                    return(
                        <RadioButton key ={index} id={index}
                        name={this.props.questionNo} 
                        answer={answer}/>
                    ) 
                })
            }
            </div>
        );
    }
}

export default RadioGroup;