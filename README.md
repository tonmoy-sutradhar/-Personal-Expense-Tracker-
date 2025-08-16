<img src="https://www.moneypatrol.com/moneytalk/wp-content/uploads/2023/06/budget185.png" alt="Logo" width="80" height="80" />

# Personal Expenses Tracker

## Live Link

- [Personal Expenses Tracker ](https://personal-expense-tracker-neon.vercel.app)

## Website Details

- Personal Expenses Tracker

The Personal Expense Tracker is a full-stack application that lets users add, view, edit, and delete expenses with category tagging. It uses Node.js, Express, and MongoDB for the backend REST API and Next.js with Tailwind CSS for a responsive, user-friendly frontend. The system ensures data validation, smooth CRUD operations, and a clean UI for managing personal finances.

## Authors

- [@Tonmoy Sutradhar](https://github.com/tonmoy-sutradhar)

## Demo

<p align="center">
  <strong>Home Page</strong>  
  <br>
  <img src="https://i.ibb.co.com/bZHW7bL/Screenshot-1433.png" alt="Home Page" width="80%" />
</p>

# How to Setup

### 1️⃣ Clone the repository

- https://github.com/tonmoy-sutradhar/-Personal-Expense-Tracker-

# Backend Setup (Express.js)

cd backend

### Install dependencies

npm install

### Create environment file

cp .env.example .env

### Start backend server

npm start # for production

# Frontend Setup (Next.js)

cd ../frontend

### Install dependencies

npm install

### Create environment file

cp .env.example .env.local

### Start frontend server

npm run dev

# Features

#### User Authentication:

- Login and registration with email/password and an additional method (Example->, Google).
- Dynamic navbar showing user details and logout option upon login.

#### Expenses:

- Add, update, and delete expenses.
- Logged-in users can view and manage their added equipment on a private "My Expenses List" page.

#### Responsive Design:

- Fully responsive interface for seamless navigation across mobile, tablet, and desktop devices.

#### Error Handling and Feedback:

- Custom error and success notifications using toast/sweet alerts instead of default alerts.
- A meaningful 404 page for non-existing routes.

#### Hosting and Deployment:

- Client-side and server-side hosting with Vercel.
- Error-free navigation across all routes, even on page reload.

# Technology Used

#### Frontend Technologies:

- Next.js: For building the single-page application (SPA) with a responsive user interface.
- Tailwind CSS / Bootstrap: For styling and ensuring responsive design.
- Lottie React: For integrating animations.
- React Tooltip: For tooltips and interactivity.

#### Backend Technologies:

- Node.js: For creating the server-side application.
- Express.js: For building RESTful APIs and handling server-side routing.

#### Database:

- MongoDB: For storing Expenses data and user-related information.

#### Authentication:

- Firebase Authentication: For secure user authentication and authorization.

#### Version Control:

- Git & GitHub: For tracking project changes with meaningful commits and collaboration.

# Feedback

If you have any feedback, please reach out to me on [LinkedIn](https://www.linkedin.com/in/tonmoy-sutradhar-013071280/).
