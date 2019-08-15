import React, {Component} from 'react';
import Question from './question/Question';
import RadioGroup from './ui/RadioGroup';
import SubmitButton from './ui/Button/SubmitButton';
import './App.css';

class App extends Component {
  state = {
    selectedValues : {}
  }

  questions = {
    "Pick one " : ["Movies","Series"],
    "Preffered genre " : ["Action","Animation","Adventure","Comedy","Drama","Fantasy","Horror","Musical","Romance","Thriller"],
    "Rating" : ["1-5","6-10"]
  }
  
  mapQuestions = (questions)=>{
    return(
      Object.keys(questions).map((key,index)=>{
        return(
          <Question key={index} quest={key} >
            <RadioGroup questionNo={index}
            choices={questions[key]}
            onSelectAnswer={this.setValues}/>
          </Question>
        )
      })
    );
  }
  

  setValues = (question, answer) =>{
    this.setState(prevState =>
       ({selectedValues : {...prevState.selectedValues, [question] : answer}}), 
       () => console.log(this.state.selectedValues)
    )
      
  }

  render(){
    return (
        <div className='App'>
          <div className='App-Header'>
            <h1>What-To-Watch</h1>
          </div>
          <div className='App-Tag'>
              <span>Saving your time since 2019 <span role='img' aria-label='thumbs-up'>👍🏿</span></span>
          </div>
          <div className='App-Body'> 
              {this.mapQuestions(this.questions)}
              <div className='App-Search-Btn'>
                <SubmitButton/>
              </div>
          </div>
        </div>
    );
  }
}

export default App;
