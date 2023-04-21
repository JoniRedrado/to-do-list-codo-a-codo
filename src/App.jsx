import { useState } from 'react'
import './App.css'
import ToDoList from './pages/ToDoList'
import TaskProvider from './contexts/TaskContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TaskProvider>
        <ToDoList />
      </TaskProvider>
    </div>
  )
}

export default App
