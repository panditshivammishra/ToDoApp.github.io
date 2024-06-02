import React from 'react'
import { useState } from 'react'
export const TodoForm = ({addTodo}) => {
    const[text,setText]=useState("");
    const handleSubmit=(e)=>{

    e.preventDefault();
   
    if (text.trim().length>0) {
      addTodo(text);
      setText("");
    }
    else{
      alert("Please enter a value in the input field.");
      return false;
    }
    }
  return (
   <form action="" onSubmit={handleSubmit}>
    <input type="text" id="inp" value={text} placeholder='Add items here ' onChange={(e)=>{setText(e.target.value)}}/>
    <button type="submit" className='btn'>Add</button>
   </form>
  )
}

export default TodoForm
