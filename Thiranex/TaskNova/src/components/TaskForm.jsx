import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [task, setTask] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [category, setCategory] = useState('General')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (task.trim() === '') {
    setError('Please enter a task')
    return
    }

    setError('')

    const newTask = {
      id: Date.now(),
      title: task,
      priority: priority,
      category: category,
      completed: false
    }

    onAddTask(newTask)

    setTask('')
    setPriority('Medium')
    setCategory('General')
  }

  return (
    <form onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
    
      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>General</option>
        <option>Work</option>
        <option>Personal</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskForm