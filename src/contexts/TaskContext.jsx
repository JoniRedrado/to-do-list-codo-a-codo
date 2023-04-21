import React, { createContext, useState} from "react";

export const TaskContext = createContext();

const TaskProvider = ( {children} ) => {
    const [ tasks, setTasks ] = useState([])

    const addTask = (task) => {
        setTasks([...tasks, task]);
        console.log(tasks);
    }

    const deleteTask = (task) => {
        setTasks(tasks.filter( e => e.title !== task))
    }

    return (
        <TaskContext.Provider
        value={{
            tasks,
            addTask,
            deleteTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;