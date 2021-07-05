import React, {useState} from 'react'

import add_todo from "../redux/action/action.js";
import {connect} from "react-redux"


const ADDtask = ({add_todo}) => {
    
    const [text, setText] = useState("")
    // const handleSubmite = (e) => {e.preventDefault()
    // const newtodo =  {
    //     id:Math.random(),
    //     text:text, 
    //     isComplete:false
    //     }
    //     add_todo(newtodo)
    //     setText('')

    // }
    const HandleSubmit = (e) => {
        e.preventDefault();
        const newtodo = {
          id: Math.random(),
          text: text,
          isComplete: false,
        };
       
    add_todo(newtodo);
    setText("");
        
      };
    

    return (
        <div className = "addtodo">
            <input type = "text" placeholder = "here enter your new todo" value = {text} onChange = {(e) =>setText(e.target.value)} /> 
            <button onClick = {HandleSubmit} >ADD</button>
            
        </div>
    )
}

export default connect(null, {add_todo})(ADDtask)
