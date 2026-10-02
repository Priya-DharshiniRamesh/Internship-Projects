import { useEffect, useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import ProgressTracker from './components/ProgressTracker'

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]) 

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const updateTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, ...updatedTask }
          : task
      )
    )
  }

  const clearTasks = () => {
    setTasks([])
  }

  return (
    <div className="app">
      <h1>TaskNova</h1>
      <p>Your friendly task manager</p>

      <TaskForm onAddTask={addTask} />

      <ProgressTracker tasks={tasks} />

      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
        onUpdateTask={updateTask}
      />

      {tasks.length > 0 && (
        <button onClick={clearTasks}>
          Clear All Tasks
        </button>
      )}
    </div>
  )
}

export default App