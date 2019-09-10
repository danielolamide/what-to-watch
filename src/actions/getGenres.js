import {FETCH_GENRE_BEGIN,FETCH_GENRE_FAILURE,FETCH_GENRE_SUCCESS } from '../constants/actionTypes'
import axios from 'axios';


export const fetchGenre = ()=> {
   return dispatch =>{
      dispatch(fetchGenreBegin());
      axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API}`)
      .then(response=>{
         dispatch(fetchGenreSuccess(response.data.genres))
      })
      .catch(error=>{
         dispatch(fetchGenreFailure(error))
      })
   }
}

const fetchGenreBegin = ()=>({
    type : FETCH_GENRE_BEGIN
 })
 
const fetchGenreSuccess = genres=>({
    type : FETCH_GENRE_SUCCESS,
    genres
 })
 
const fetchGenreFailure = error=>({
    type : FETCH_GENRE_FAILURE,
    error
 })
 