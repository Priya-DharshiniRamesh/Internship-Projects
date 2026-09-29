/* =========================================================
   PROJECT 3: INTERACTIVE WEB ELEMENTS
   Each feature follows Input -> Process -> Output:
     INPUT   = the event (click, submit, keypress)
     PROCESS = the function that updates state
     OUTPUT  = the DOM mutation the user sees
   ========================================================= */

/* ---------------------------------------------------------
   FEATURE 1: DARK / LIGHT TOGGLE SWITCH
   --------------------------------------------------------- */

const themeSwitch = document.querySelector('.js-theme-toggle');
const body = document.body;

// Default is dark mode, so the switch starts "checked".
// Restore whatever the user chose last time.
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light-mode');
  themeSwitch.checked = false;
} else {
  themeSwitch.checked = true;
}

// INPUT: user flips the switch
themeSwitch.addEventListener('change', () => {
  // PROCESS + OUTPUT: toggle the class that CSS keys off of
  const isDark = themeSwitch.checked;
  body.classList.toggle('light-mode', !isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});


/* ---------------------------------------------------------
   FEATURE 2: COUNTER (state management)
   --------------------------------------------------------- */

const scoreDisplay = document.querySelector('#score-display');
const incrementBtn = document.querySelector('.js-increment');
const decrementBtn = document.querySelector('.js-decrement');
const resetBtn = document.querySelector('.js-reset');

let currentScore = 0; // let, because this value mutates

function renderScore() {
  scoreDisplay.textContent = currentScore; // safe text injection
}

incrementBtn.addEventListener('click', () => {
  currentScore++;
  renderScore();
});

decrementBtn.addEventListener('click', () => {
  currentScore--;
  renderScore();
});

resetBtn.addEventListener('click', () => {
  currentScore = 0;
  renderScore();
});


/* ---------------------------------------------------------
   FEATURE 3: TO-DO LIST (dynamic content / node creation)
   --------------------------------------------------------- */

const addForm = document.querySelector('.js-add-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');
const emptyState = document.querySelector('#empty-state');

function updateEmptyState() {
  const hasTasks = taskList.children.length > 0;
  emptyState.classList.toggle('is-hidden', hasTasks);
}

function createTaskElement(taskText) {
  const li = document.createElement('li');
  li.className = 'task-row';

  const checkBtn = document.createElement('button');
  checkBtn.type = 'button';
  checkBtn.className = 'task-check';
  checkBtn.setAttribute('aria-label', 'Mark task done');

  const textSpan = document.createElement('span');
  textSpan.className = 'task-text';
  textSpan.textContent = taskText; // textContent, never innerHTML -> avoids XSS

  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.className = 'task-delete';
  deleteBtn.textContent = '✕';
  deleteBtn.setAttribute('aria-label', 'Delete task');

  checkBtn.addEventListener('click', () => {
    const isDone = checkBtn.classList.toggle('is-done');
    textSpan.classList.toggle('is-done', isDone);
    checkBtn.textContent = isDone ? '✓' : '';
  });

  deleteBtn.addEventListener('click', () => {
    li.remove(); // OUTPUT: node removed from the DOM
    updateEmptyState();
  });

  li.append(checkBtn, textSpan, deleteBtn);
  return li;
}

// PROCESS: reads the input, validates it, updates the DOM
function addTask(event) {
  event.preventDefault(); // stop the form from reloading the page

  const text = taskInput.value.trim();
  if (text === '') return; // guard clause: ignore empty submissions

  const taskEl = createTaskElement(text);
  taskList.appendChild(taskEl); // OUTPUT: new node inserted

  taskInput.value = '';
  taskInput.focus();
  updateEmptyState();
}

// INPUT: submitting the form (covers both the button click and pressing Enter)
addForm.addEventListener('submit', addTask);

// Initialize empty state on first load
updateEmptyState();