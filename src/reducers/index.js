import selectedValuesReducer from './selectedValuesReducer'
import allGenresReducer from './allGenresReducer'
import setGenresReducer from './setGenresReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    selectedValues : selectedValuesReducer,
    allGenreIDs : allGenresReducer,
    selectedGenreID : setGenresReducer
})

export default rootReducer;