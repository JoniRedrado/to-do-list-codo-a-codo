import React, { createContext, useState} from "react";

export const TaskContext = createContext();

const TaskProvider = ( {children} ) => {
    const [ tasks, setTasks ] = useState([])

    const addTask = (task) => {
        setTasks([...tasks, task]);
        console.log(tasks);
    }


    return (
        <TaskContext.Provider
        value={{
            tasks,
            addTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;