
import { ADD_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_COMPLETE
 } from "../action/actionTypes";
 const initialState = () =>{
     return {
         todo :{
             id:0, 
             text : "learn redux js", 
             isComplete : false
         }
     }
 }
 export const reducer =(state = initialState, action) => {
     switch(action.type) {
         case ADD_TODO : {
             return {...state, todo: [...state.todo, action.payload]}
         }
         case EDIT_TODO : {
             return { ...state, todo:state.todo.map(el =>el.id ===action.payload.id ? el = action.payload.edittodo : state.todo)}
         } 
         case DELETE_TODO : {
             return { ...state, todo : state.todo.filter(el =>el.id !== action.payload)}
         }
         case TOGGLE_COMPLETE : {
             return { ...state,todo:state.todo.map(el =>el.id === action.payload ?{...el, isComplete:el.isComplete}: state.todo)}
         }
         default  : 
            return state
         
     }
 }
 export default reducer