# TaskNova – Task Management Application

TaskNova is a simple and user-friendly Task Management Application built using React and Vite.

It helps users create, organize, track, and manage their daily tasks easily.

## Features

- Add new tasks
- Set task priority (High, Medium, Low)
- Select task category (General, Work, Personal)
- Complete and undo tasks
- Edit tasks
- Delete tasks with a confirmation message
- Delete all tasks
- Track task completion progress
- Save tasks using browser Local Storage
- Responsive and simple user interface

## Technologies Used

- React.js
- Vite
- JavaScript
- HTML
- CSS
- Local Storage
- ESLint

## Project Structure

```text
TaskNova/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   └── ProgressTracker.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## How to Run the Project

### 1. Clone or download the project

Open the project folder in VS Code.

### 2. Install dependencies

Open the terminal and run:

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Open the application

The terminal will provide a local URL such as:

```text
http://localhost:5173/
```

Open this URL in your browser.

## How It Works

### Add Task
Enter a task name, choose its priority and category, and click **Add Task**. If the task name is empty, an error message is shown.

### Complete Task
Click **Complete** to mark a task as completed. Click **Undo** to make it active again.

### Edit Task
Click **Edit** to change the task name.

### Delete Task
Click **Delete** to remove a task. A confirmation message is shown before deletion.

### Clear All Tasks
Click **Clear All Tasks** to remove every task at once.

### Progress Tracking
The application automatically calculates the number and percentage of completed tasks and shows them in a progress bar.

### Local Storage
Tasks are stored in the browser's Local Storage, so they remain available even after refreshing the page.

## Purpose

The purpose of TaskNova is to provide a simple task management system while demonstrating the use of React components, state management, event handling, and browser Local Storage.

## Author

**Priya Dharshini R**
