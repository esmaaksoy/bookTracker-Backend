## BookTracker-Backend

This project is a Book Tracker application built with Express.js and Sequelize ORM. It allows users to perform CRUD (Create, Read, Update, Delete) operations on a collection of books. The application uses PostgreSQL as the database and is connected to the frontend using CORS.

## Project Outcome

![Project gif](./book.gif)

[BookTracker Live Page](https://book-tracker-frontend-five.vercel.app/)

## Tech/framework used

- **CRUD Operations**
  Users can create, read, update, and delete books from the database.
- **Sequelize ORM**
  Sequelize is used as the ORM (Object-Relational Mapping) tool to interact with the PostgreSQL database.
- **Middleware**
  Middleware functions are implemented to handle requests, perform validations, and enhance security.
- **CORS**
  Cross-Origin Resource Sharing (CORS) is implemented to allow the frontend to communicate with the backend server.
- **Express.js**
  Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **PostgreSQL**
  PostgreSQL is a powerful, open-source object-relational database system known for its reliability, robustness, and support for SQL.
- **Other Dependencies**
  Various other dependencies are used for routing, middleware, and error handling.

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/esmaaksoy/bookTracker-Backend
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. The project is ready, you can start using it now.
   You can run:

   `nodemon app.js`

   Runs the app in the development mode.\
   Open [http://localhost:8000](http://localhost:8000) to view it in the browser.
