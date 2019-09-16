import { SELECT_VALUE } from '../constants/actionTypes'

const init_state = {}

export default function selectedValuesReducer(state = init_state, action){
    switch(action.type){
        case SELECT_VALUE : 
            return {...state,[action.question] : action.answer}
        default:
            return state;
    }
}

