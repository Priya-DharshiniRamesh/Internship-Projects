# Blog Platform with Comments

A full-stack blog platform built using HTML, CSS, JavaScript, Node.js, Express.js, MongoDB and JWT authentication.

## Features

- User registration and login
- JWT-based authentication
- Create blog posts
- View all blog posts
- View individual blog posts
- Edit own blog posts
- Delete own blog posts
- Add comments to blog posts
- Delete own comments
- MongoDB database integration
- Protected routes for authenticated users
- Responsive and simple frontend interface

## Technologies Used

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

## Project Structure

```text
Blog-Platform/
├── backend/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
└── frontend/
    ├── index.html
    ├── register.html
    ├── login.html
    ├── create-post.html
    ├── posts.html
    └── edit-post.html
````

## How to Run

### Backend

```bash
cd backend
npm install
npm run dev
```

The backend runs on:

```text
http://localhost:5000
```

### Frontend

Open:

```text
frontend/index.html
```

in a web browser.

## Database

The application uses MongoDB Atlas with a separate database named:

```text
BlogPlatformDB
```

## Authentication

JWT tokens are used to protect actions such as:

* Creating posts
* Editing posts
* Deleting posts
* Adding comments
* Deleting comments

Users can only edit or delete their own posts and comments.

