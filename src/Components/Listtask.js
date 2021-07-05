import React from 'react'
import Task from '../Components/Task.js'
import {connect} from "react-redux"


const Listtask = ({listtask}) => {
    console.log('list tast', listtask)
     return (
         <div>
            {listtask.map(el => <Task  key = {el.id} todo = {el}/>)} 
            
    </div>
    )
 }
 const mapStateToProps = (state) =>{
     return {
         listtask:state.todo
     }
 }

 export default connect (mapStateToProps) (Listtask)
