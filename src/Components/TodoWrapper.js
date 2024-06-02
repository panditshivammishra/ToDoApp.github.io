import React from 'react'
import TodoForm from './TodoForm'
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo'
import EditTodoForm from './EditTodoForm';
uuidv4();
export const TodoWrapper = () => {
  const[todos,setTodos]=useState([]);
  const toggleComplete=(id)=>{
    setTodos(todos.map(todo=>todo.id===id?{...todo,completed:!todo.completed}:todo))
  }
  const deleteTodo=(id)=>{
     setTodos(todos.filter(todo=>todo.id!==id))
  }
const addTodo=(todo)=>{
setTodos([...todos,{id:uuidv4(),task:todo,completed:false,isEditing:false}]);
}
const editTodo=id=>{
  setTodos(todos.map((todo)=> todo.id===id?{...todo,isEditing:!todo.isEditing}:todo))
}
const EditTodo=(task,id)=>{setTodos(todos.map(todo=>todo.id===id?{...todo,task,isEditing:!todo.isEditing}:todo))
console.log(todos)}
  return (
    <>
    <h1>Add What TO Do !</h1>
   <TodoForm addTodo={addTodo}/>
  {todos.map((todo,id)=>
  todo.isEditing?<EditTodoForm EditTodo={EditTodo} myTodo={todo}/>:<Todo myTodo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>)}
   </>
  )
}

export default TodoWrapper
