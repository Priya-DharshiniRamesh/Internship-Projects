function TaskList({ tasks, onToggleTask, onDeleteTask, onUpdateTask }) {
  return (
    <div className="task-list">
      <h2>My Tasks ({tasks.length})</h2>


      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        tasks.map((task) => (
            <div
            className={`task-item ${task.completed ? 'completed' : ''}`}
            key={task.id}
            >         
            <div>
              <h3>{task.title}</h3>
              <p>
                Priority: {task.priority} | Category: {task.category}
              </p>
            </div>

            <div>
            <button onClick={() => onToggleTask(task.id)}>
                {task.completed ? 'Undo' : 'Complete'}
            </button>

            <button
            onClick={() => {
                const newTitle = window.prompt('Edit task:', task.title)

                if (newTitle !== null && newTitle.trim() !== '') {
                onUpdateTask(task.id, {
                    title: newTitle.trim()
                })
                }
            }}
            >
            Edit
            </button>

            <button
                onClick={() => {
                if (window.confirm('Are you sure you want to delete this task?')) {
                    onDeleteTask(task.id)
                }
                }}
            >
                Delete
            </button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default TaskList