import {SET_GENRE_ID} from '../constants/actionTypes'

export const setGenreID = (genres,selectedGenre)=>{
    return{
        type : SET_GENRE_ID,
        genres,
        selectedGenre
    }
}