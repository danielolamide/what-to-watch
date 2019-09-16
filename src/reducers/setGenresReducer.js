import {SET_GENRE_ID} from '../constants/actionTypes'

const init_state = []
export default function setGenresReducer(state = init_state, action){
    switch (action.type) {
        case SET_GENRE_ID:
            // return setSelectedGenreID(action,state)
            const genreID = Object.keys(action.genres).find(key => action.genres[key]===action.selectedGenre)
            return [genreID]
        default:
            return state;
    }

}

