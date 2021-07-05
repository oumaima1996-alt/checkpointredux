import {createStore} from "redux"
import reducer from "./reducer/reducer.js"
const state = createStore(reducer)
export default state