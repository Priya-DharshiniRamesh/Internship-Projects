# Project 3 – Interactive Web Elements

**DecodeLabs – Frontend Development Internship**

**Author:** Priya Dharshini R  
**Course:** B.Tech Artificial Intelligence and Data Science  
**Project:** Project 3 – Interactive Web Elements

## Overview

Project 3 is the engagement phase of the DecodeLabs Frontend Development track. The goal is to add interactivity to a webpage using JavaScript by responding to user actions and updating the page in real time through manipulation of the Document Object Model (DOM).

## Project Requirements

- Buttons or toggles
- Basic user interaction
- Dynamic content updates

**Key Skills:** JavaScript basics, DOM manipulation

## What I Built

A single-page application with three interactive features:

| Feature | Description |
|---------|-------------|
| **Dark / Light Toggle** | A switch in the header that changes the theme. The selected theme is saved in `localStorage` and restored on the next visit. Dark mode is the default. |
| **Counter** | Displays a score with **+**, **−**, and **Reset** buttons. The score updates instantly. |
| **To-Do List** | Allows users to add tasks using the form or Enter key, mark tasks as completed, and delete tasks. An empty-state message appears when there are no tasks. |

## How It Works

Each feature follows an **Input → Process → Output** pattern:

| Feature | Input | Process | Output |
|---------|-------|---------|--------|
| Theme Toggle | `change` event | Reads the checkbox state and saves the theme to `localStorage` | Toggles the `light-mode` class on `<body>` |
| Counter | `click` event | Updates the `currentScore` variable | Updates the displayed score using `textContent` |
| Add Task | `submit` event | Trims and validates the task text | Creates and adds a new task to the list |
| Complete Task | `click` event | Toggles the completed state | Applies or removes the `is-done` class |
| Delete Task | `click` event | Removes the selected task | Removes the task from the DOM and updates the empty state |

## Key Concepts Used

### JavaScript

- `document.querySelector()` for selecting DOM elements
- `addEventListener()` for handling `click`, `change`, and `submit` events
- JavaScript variables for state management
- Functions such as `renderScore()`, `addTask()`, `createTaskElement()`, and `updateEmptyState()`
- Dynamic DOM creation using `document.createElement()` and `append()`
- Safe text insertion using `textContent` instead of `innerHTML`
- `event.preventDefault()` for form handling
- Input validation using `trim()`
- `classList.toggle()` for visual state changes
- `localStorage` for saving the selected theme

### HTML

- Semantic HTML elements such as `<header>`, `<main>`, `<section>`, and `<footer>`
- A real `<form>` and `<label>` for user input and keyboard interaction
- `aria-label` attributes for icon-only buttons

### CSS

- CSS custom properties for colours, spacing, and other design values
- `body.light-mode` for the light theme
- Custom theme toggle switch
- Flexbox and CSS Grid layouts
- `js-` class prefix for JavaScript hooks
- `is-` class prefix for visual states
- `:focus-visible` styles for keyboard accessibility
- `prefers-reduced-motion` support
- Responsive layout for smaller screens

## Tools and Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- DOM API
- `localStorage`
- CSS Custom Properties
- Flexbox
- CSS Grid
- Google Fonts (Inter and JetBrains Mono)
- Visual Studio Code
- Modern Web Browsers

## How to Run

1. Download or clone the project.
2. Open the project folder.
3. Open `index.html` in a modern web browser.

You can also use the **Live Server** extension in Visual Studio Code to run the project locally.

### Note

Google Fonts are loaded from the internet. Without an internet connection, the webpage will still work using fallback system fonts.

Only the selected theme is saved using `localStorage`. The counter value and to-do list are stored in memory and reset when the page is refreshed.

## Skills Demonstrated

- JavaScript fundamentals
- DOM manipulation
- Dynamic DOM element creation
- Event handling
- State management
- Form handling
- Input validation
- `localStorage`
- CSS theming
- Responsive web design
- Accessible interface design

## What I Learned

- Handling user interactions with JavaScript event listeners
- Managing application state using JavaScript variables
- Creating and removing DOM elements dynamically
- Handling forms using `preventDefault()`
- Validating user input
- Using `textContent` for safe user-entered content
- Creating themes using CSS custom properties
- Saving user preferences using `localStorage`
- Building responsive and accessible interactive webpages

## Conclusion

This project helped me move from creating static webpages to building interactive web experiences. By using vanilla JavaScript, I learned how to respond to user actions, manage application state, dynamically update the DOM, and create responsive and accessible user interfaces.

## Acknowledgements

Completed as part of the **Frontend Development Internship at DecodeLabs**.
