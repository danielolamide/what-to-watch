import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from '../store/index'
import Home from '../pages/Home';
import Results from '../pages/Results';

class App extends Component {
  // setGenreID = (genres,selectedGenre)=>{
  //     return Object.keys(genres).find(key => genres[key]===selectedGenre)
  // }

  onQueryClick = ()=>{
    console.log(this.setGenreID(this.props.allGenreIDs, this.props.selectedValues[1]))
    console.log(this.props.allGenreIDs)
  }


  render(){
    return (
      <Provider store={store}>
        <Router>
          <Route exact path ='/' component={Home}/>
          <Route path='/results' component={Results}/>
        </Router>
      </Provider>
    )
  }
}


export default App;
