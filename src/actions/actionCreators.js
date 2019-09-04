import { SELECT_VALUE } from '../constants/actionTypes'

export const selectValue = (question,answer)=>{
   return{
        type : SELECT_VALUE,
        question,
        answer
   }
}