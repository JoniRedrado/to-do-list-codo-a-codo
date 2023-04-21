import React, {useContext, useState} from 'react'
import { TaskContext } from '../contexts/TaskContext';

const AddTask = () => {



  const { addTask } = useContext(TaskContext);

  const handleClick = () => {
    const title = document.getElementById('task-title')
    const description = document.getElementById('task-descrition')
    const task = {title: title.value, description: description.value, complete: false}
    addTask(task)
    title.value=""
    description.value=""
  }

  return (
    <div>
      <input type='text' id= 'task-title' placeholder='Titulo'/>
      <input type='text' id= 'task-descrition' placeholder='Descripción'/>
      <button onClick={handleClick}>Agregar!</button>
    </div>
  )
}

export default AddTask