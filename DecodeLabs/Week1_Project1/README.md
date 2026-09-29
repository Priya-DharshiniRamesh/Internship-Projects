# Week 1 – Static Webpage Design

**DecodeLabs – Frontend Development Internship**

**Author:** Priya Dharshini R  
**Course:** B.Tech Artificial Intelligence and Data Science  
**Project:** Project 1 – Static Webpage Design

## Overview

Project 1 is the structural phase of the DecodeLabs Frontend Development track. The goal is to build a static webpage using only HTML and CSS, focusing on semantic structure and a clean, readable layout instead of animation or interactivity.

## Project Requirements

- Create a static webpage using HTML and CSS
- Use proper HTML structure
- Use headings, sections and images
- Build a clean and readable layout

## Folder Structure

```text
DecodeLabs_Project_1/
├── index.html                    # Page structure (semantic HTML)
├── style.css                     # All styling (external stylesheet)
├── Frontend development p1.pdf   # Project brief
└── README.md
```

## What I Built

A single-page personal portfolio-style page with five parts:

| Section | Description |
|---------|-------------|
| **Header** | Sticky top bar with the site name and navigation links (About, Work, Contact) |
| **Hero** | Main heading, a short introduction and a "See My Work" button |
| **About** | Short explanation of the project and its focus on structure |
| **Project Examples** | Grid of three project cards, each with an image, title and description |
| **Footer / Contact** | "Get in Touch" section with contact details |

## Key Features

**HTML**
- Semantic tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Proper heading hierarchy (`<h1>` for the page title, `<h2>` for sections, `<h3>` for cards)
- Descriptive `alt` text on every image
- `width` and `height` set on images so space is reserved and the layout does not jump while loading
- `aria-label` on the navigation
- In-page anchor links for navigation

**CSS**
- One external stylesheet, with all styles kept out of the HTML
- CSS variables (`:root`) for colours, fonts and maximum width
- **Flexbox** for header, navigation, buttons and card content alignment
- **CSS Grid** (`repeat(auto-fit, minmax(260px, 1fr))`) for the responsive project card layout
- Box model reset using `box-sizing: border-box`
- Google Fonts: Fraunces (headings) and Inter (body text)
- Smooth scrolling and hover / `:focus-visible` states for accessibility
- Responsive design with `clamp()` for fluid heading size and a mobile media query (max-width: 640px)

## Tools and Technologies

- HTML5
- CSS3
- Google Fonts
- Visual Studio Code (or any code editor)
- Any modern web browser

## How to Run

1. Download or clone the project folder.
2. Open `index.html` in any web browser (double-click it, or use the Live Server extension in VS Code).

**Note:** The page loads Google Fonts and placeholder images from `placehold.co`, so an internet connection is needed for the fonts and images to display. The three project cards use placeholder images and sample descriptions to demonstrate the layout, and they are not screenshots of real projects.

## Skills Demonstrated

- HTML fundamentals and semantic markup
- CSS styling and external stylesheets
- Layout using Flexbox and CSS Grid
- Responsive design
- CSS variables and consistent styling
- Basic accessibility practices (alt text, heading order, focus styles)
- Building a clean, readable page structure

## Conclusion

This project built the foundation of frontend development: writing structured, semantic HTML and styling it with clean, maintainable CSS. It shows how content and style work together to produce a clear, readable and responsive static webpage.
