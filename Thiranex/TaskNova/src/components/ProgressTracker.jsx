function ProgressTracker({ tasks }) {
  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length

  const totalTasks = tasks.length

  const progress =
    totalTasks === 0
      ? 0
      : (completedTasks / totalTasks) * 100

  return (
    <div className="progress-tracker">
      <h2>Task Progress</h2>

      <p>
        {completedTasks} of {totalTasks} tasks completed
      </p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p>{Math.round(progress)}% completed</p>
    </div>
  )
}

export default ProgressTracker