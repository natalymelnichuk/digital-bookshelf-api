
# Digital Bookshelf API

A RESTful API for managing a digital book library built with Node.js, Express, and Mongoose (MongoDB Atlas). This project supports full CRUD functionality with data validation.


## Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB Atlas + Mongoose
* **Logging & Utilities:** Morgan, dotenv


## Prerequisites & Installation

### Requirements

Ensure you have the following installed on your machine:
 * Node.js 
 * npm 
 * A MongoDB Atlas account (to obtain a database connection string)

### Clone the Repository

* git clone (https://github.com/natalymelnichuk/digital-bookshelf-api)

* cd digital-bookshelf-api

### Install Dependencies

* npm install

### Configure Environment Variables (.env)

Create a .env file in the root directory based on the template below:

* PORT=3000
* MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/digital-bookshelf?retryWrites=true&w=majority

## API Endpoints

Base URL: http://localhost:3000/api/books

* POST - /api/books
* GET - /api/books
* GET - /api/books/:id
* PUT - /api/books/:id
* DELETE - /api/books/:id