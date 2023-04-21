import React, {useContext, useState} from 'react'
import { TaskContext } from '../contexts/TaskContext';
import './Tarea.css'


const Tarea = ( {header, description} ) => {

  const [ completed, setCompleted ] = useState("incomplete")

  const { deleteTask } = useContext(TaskContext)

  const handleClick = () => {
    deleteTask(header)
  }
  const taskCompleted = () => {
    if( completed == "incomplete") {
      setCompleted("complete")
    } else {
      setCompleted("incomplete")
    }
  }

  return (
    <div className={completed} >
      <h5>{header}</h5>
      <p>{description}</p>
      <button 
        onClick={handleClick}
      >🗑</button>
      <button
        onClick={taskCompleted}
      >✔</button>
    </div>
  )
}

export default Tarea