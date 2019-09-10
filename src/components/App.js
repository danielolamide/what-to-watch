import React, {Component} from 'react';
import Question from './question/Question';
import RadioGroup from './ui/RadioGroup';
import SubmitButton from './ui/Button/SubmitButton';
import {connect} from 'react-redux';
import './App.css';
import {selectValue} from '../actions/selectValue';
import { fetchGenre } from '../actions/getGenres';

class App extends Component {
  questions = {
    "Pick one " : ["Movies","Series"],
    "Preffered genre " : ["Action","Animation","Adventure","Comedy","Drama","Fantasy","Horror","Music","Romance","Thriller"],
    "Rating" : ["1-5","6-10"]
  }

  BaseURL = null

  componentDidMount(){
    this.props.dispatch(fetchGenre())
  }

  componentDidUpdate(prevProps){
      if(this.props !== prevProps.props){
        console.log(this.props.selectedValues,this.props);
      }
      else{
        console.log("No")
      }
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
    this.props.dispatch(selectValue(question,answer))
  }


  setGenreID = (genres,selectedGenre)=>{
      return Object.keys(genres).find(key => genres[key]===selectedGenre)
  }

  onQueryClick = ()=>{
    console.log(this.setGenreID(this.props.allGenreIDs, this.props.selectedValues[1]))
    console.log(this.props.allGenreIDs)
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
                <SubmitButton clicked={this.onQueryClick.bind(this)}/>
              </div>
          </div>
        </div>
    );
  }
}
function mapStateToProps(state){
  return {
    selectedValues : state.selectedValues,
    allGenreIDs : state.allGenreIDs
  };
}

export default connect(mapStateToProps)(App);
