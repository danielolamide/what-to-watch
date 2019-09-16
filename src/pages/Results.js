import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setGenreID} from '../actions/setGenres';

class Results extends Component {

    genresObject = null
    createGenresObj(){
        this.props.allGenreIDs['genres'].forEach(genre =>{
            for (const i in genre){
                this.genresObject = {...this.genresObject,[i] : genre[i]}
            }
        })
    }

    setGenresID(){
        this.props.dispatch(setGenreID(this.genresObject,this.props.selectedValues[1]))
    }

    componentDidMount(){
        this.createGenresObj()
        this.setGenresID()
        console.log(this.genresObject)
        console.log(Object.keys(this.props.allGenreIDs['genres']))
    }

    componentDidUpdate(prevProps){
        if(this.props !== prevProps.props){
            console.log(this.props)
        }
        else{
            console.log("Nothing")
        }
    }

    clicked = ()=>{
        console.log(this.props)
    }
    render(){
        return(
            <div onClick={this.clicked}>
                Hello World
            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        selectedValues : state.selectedValues,
        allGenreIDs : state.allGenreIDs ,
        selectedGenreID : state.selectedGenreID 
    };
}

export default connect(mapStateToProps)(Results);