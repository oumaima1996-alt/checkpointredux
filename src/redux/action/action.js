import {ADD_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_COMPLETE} from "../action/actionTypes.js"

const add_todo = (newtodo) => {
    return {
        type : ADD_TODO, 
        payload: newtodo }

}

const edit_todo = (edittodo, id) => {
    return {
        type : EDIT_TODO,
    payload: edittodo}

}
const delete_todo = (id) => {
    return {
        type : DELETE_TODO, 
        payload:id }

}

const toggle_complete = (id) => {
    return {
        type : TOGGLE_COMPLETE, 
        payload:id}

}
export default add_todo


