import React, {useContext, useState} from 'react'
import { TaskContext } from '../contexts/TaskContext';
import Tarea from './Tarea'

const Container = () => {

  const { tasks } = useContext(TaskContext)


  return (
    <>
      {tasks.map( (task)=>{
        return (
        <Tarea 
          header={task.title}
          description={task.description}
          key={task.title}
        />
        )
      })}
    </>
  )
}

export default Container