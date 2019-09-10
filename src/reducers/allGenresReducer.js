import {FETCH_GENRE_BEGIN,FETCH_GENRE_SUCCESS,FETCH_GENRE_FAILURE} from '../constants/actionTypes'

const init_state ={
    loading : false,
    genres : null,
    error : null

}

export default function allGenresReducer (state = init_state, action){
    switch(action.type){
        case FETCH_GENRE_BEGIN :
            return {...state,loading : true, error : null}
        case FETCH_GENRE_SUCCESS :
            return (
                 {genres : action.genres.map(genre=>{
                     return(
                          {...state.genres, [genre.id] : genre.name}
                     )
                 }), loading : false, error :null}
            )
            // return state;
        case FETCH_GENRE_FAILURE : 
            // return state;
            return {errors : [...state.errors, action.error], loading : false, genres : null}
        default :
            return state;
    }
}