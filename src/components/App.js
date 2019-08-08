import React from 'react';
import Question from './question/Question';
import RadioGroup from './ui/RadioGroup';
import './App.css';

const questions = {
  "Pick one " : ["Movies","Series"],
  "Preffered genre" : ["Action","Animation","Adventure","Comedy","Drama","Fantasy","Horror","Musical","Romance","Thriller"],
  "Rating" : ["1-5","6-10"]
}

function mapQuestions(questions){
  return(
    <Question quest="Pick One">
    <RadioGroup/>
  </Question>
  );
}

function App() {
  return (
      <div className='App'>
        <div className='App-Header'>
          <h1>What-To-Watch</h1>
        </div>
        <div className='App-Tag'>
            <span>Saving your time since 2019 <span role='img' aria-label='thumbs-up'>👍🏿</span></span>
        </div>
        <div className='App-Body'> 

        </div>
      </div>
  );
}

export default App;
