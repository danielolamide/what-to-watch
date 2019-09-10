import selectedValuesReducer from './selectedValuesReducer'
import allGenresReducer from './allGenresReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    selectedValues : selectedValuesReducer,
    allGenreIDs : allGenresReducer
})

export default rootReducer;