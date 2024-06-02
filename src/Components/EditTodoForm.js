import React from 'react'
import { useState } from 'react'
export const EditTodoForm = ({EditTodo,myTodo}) => {
    const mytodo=myTodo;
    const[text,setText]=useState(mytodo.task);
    const handleSubmit=(e)=>{
    e.preventDefault();
    if (text.trim().length ==0) {
      alert("Please enter a value in the input field.");
      return false;
    }
    EditTodo(text,mytodo.id);
    setText("");
    }
  return (
   <form action="" onSubmit={handleSubmit}>
    <input type="text" value={text} placeholder='Update' onChange={(e)=>{setText(e.target.value)}}/>
    <button type="submit" className='btn'>Update</button>
   </form>
  )
}

export default EditTodoForm