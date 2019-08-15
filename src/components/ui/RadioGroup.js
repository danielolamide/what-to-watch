import React, { Component } from 'react';
import RadioButton from './RadioButton/RadioButton';
import './RadioGroup.css';


class RadioGroup extends Component{
    radioClick= (e) =>{
        const answer = e.currentTarget.value;
        const question = e.currentTarget.name;
        this.props.onSelectAnswer(question,answer)
    }
    
    render(){
        return(
            <div className='RadioGroup' ref="r_group" data-question-no={this.props.questionNo}>
            {

                this.props.choices.map((answer,index)=>{
                    return(
                        <RadioButton key ={index} id={index}
                        name={this.props.questionNo} 
                        answer={answer}
                        changed={this.radioClick.bind(this)}/>
                    ) 
                })
            }
            </div>
        );
    }
}

export default RadioGroup;