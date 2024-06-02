import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash} from '@fortawesome/free-solid-svg-icons'
export const Todo = ({myTodo,toggleComplete,deleteTodo,editTodo}) => {

  const mytodo=myTodo;
  
  return (
  
    <div className="todos">
      <p onClick={()=>toggleComplete(mytodo.id)} className={`${mytodo.completed?'completed':""}`}>{mytodo.task}</p>
      <div className="aws">
      <FontAwesomeIcon onClick={()=>editTodo(mytodo.id)} icon={faPenToSquare}/>
      <FontAwesomeIcon onClick={()=>deleteTodo(mytodo.id)} icon={faTrash}/>
      </div>
    </div>
  )
}

export default Todo
