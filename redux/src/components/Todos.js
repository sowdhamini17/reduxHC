import React from "react";
import { useSelector } from "react-redux";



function Todos(){
   const todos=useSelector((state=>{
    return state.todos}))
   console.log(todos)
 return(<div></div>)
}
export default Todos