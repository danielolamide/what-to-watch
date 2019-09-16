import React, { Component } from 'react';
import './Home.css'
import SubmitButton from '../components/ui/Button/SubmitButton';
import Question from '../components/question/Question';
import RadioGroup from '../components/ui/RadioGroup';
import {connect} from 'react-redux'
import {selectValue} from '../actions/selectValue';
import { fetchGenre } from '../actions/getGenres';
// import {setGenreID} from '../actions/setGenres';


class Home extends Component{

    // setGenresID(){
    //   this.props.dispatch(setGenreID(this.props.allGenreIDs.genres,this.props.selectedValues[1]))
    // }

    componentDidMount(){
        this.props.dispatch(fetchGenre())
    }

    componentDidUpdate(prevProps){
        if(this.props !==prevProps.props){
            console.log(this.props);
        }
        else{
            console.log("Nothing")
        }
    }


    questions = {
        "Pick one " : ["Movies","Series"],
        "Preffered genre " : ["Action","Animation","Adventure","Comedy","Drama","Fantasy","Horror","Music","Romance","Thriller"],
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
      this.props.dispatch(selectValue(question,answer))
    }

    render(){
        return (
            <div className='Home'>
              <div className='Home-Header'>
                <h1>What-To-Watch</h1>
              </div>
              <div className='Home-Tag'>
                  <span>Saving your time since 2019 <span role='img' aria-label='thumbs-up'>👍🏿</span></span>
              </div>
              <div className='Home-Body'> 
                  {this.mapQuestions(this.questions)}
                  <div className='Home-Search-Btn'>
                    <SubmitButton clicked={this.setGenresID}/>
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

export default connect(mapStateToProps)(Home);