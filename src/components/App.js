import React, {Component} from 'react';
import Question from './question/Question';
import RadioGroup from './ui/RadioGroup';
import SubmitButton from './ui/Button/SubmitButton';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    selectedValues : {},
    genreID : {}
  }

  questions = {
    "Pick one " : ["Movies","Series"],
    "Preffered genre " : ["Action","Animation","Adventure","Comedy","Drama","Fantasy","Horror","Music","Romance","Thriller"],
    "Rating" : ["1-5","6-10"]
  }

  BaseURL = null

  componentDidMount(){
    this.getGenreID();
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


  getGenreID = ()=>{
      axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API}`)
      .then((response)=>{
        response.data.genres.map((genre,index)=>{
          return(
              this.setState(prevState=>
                ({genreID : {...prevState.genreID, [genre.id] : genre.name}})
              )
          )
        })
      })
  }

  setGenreID = (genres,selectedGenre)=>{
      return Object.keys(genres).find(key => genres[key]===selectedGenre)
  }

  onQueryClick = ()=>{
    console.log(this.setGenreID(this.state.genreID, this.state.selectedValues[1]))
    console.log(this.state.genreID)
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

export default App;
