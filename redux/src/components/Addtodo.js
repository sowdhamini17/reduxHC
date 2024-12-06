import React,{useState} from "react"
import {useDispatch} from "react-redux";
import { addTodo } from "../feature/todoSlice";

function Addtodo(){
    const[input,setInput]=useState()
    const dispatch =useDispatch()

    const addTodohandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return(<div>
        <form onSubmit={addTodohandler}>
            <input
            type="text"
            value={input}
            onChange={(e)=>e.target.value}
            />
            <button>submit</button>
        </form>
    </div>)
}

export default Addtodo