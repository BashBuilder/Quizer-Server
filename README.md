# Quizer Backend Server Documentation

This documentation provides an overview of the backend server for the Quizer app. The server is built using Node.js, Express, and MongoDB.

## Table of Contents

- [Project Structure](#project-structure)
- [Setup](#setup)
- [Endpoints](#endpoints)
- [Fetch Questions](#fetch-questions)
- [User Authentication](#user-authentication)
- [Calculate Scores](#calculate-scores)
- [Save Results](#save-results)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

The backend server follows a modular structure:

quizer-backend/
|-- controllers/
|-- models/
|-- routes/
|-- index.js
|-- package.json
|-- .env
|-- ...

- **controllers:** Contains logic for handling different routes.
- **models:** Defines MongoDB schemas for data.
- **routes:** Specifies API routes.

## Setup

1. Clone the repository
2. Install dependencies
3. Create a .env file and add necessary environment variables:
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/quizer
   JWT_SECRET=mysecretkey
4. Start the server:
   npm start

The server will run on http://localhost:3000.

## Endpoints

Fetch Questions
Endpoint: /api/quizer/getAllQuestions
Method: POST
Description: Fetches quiz questions from the database.

## User Authentication

Endpoint: /api/quizer/user
Methods:
POST - User login
POST - User registration
Description: Handles user authentication using JWT.

## Calculate Scores

Endpoint: /api/quizer/submitResults
Method: POST
Description: Calculates quiz scores based on user responses.

## Save Results

Endpoint: /api/quizer/submitResults

Method: POST
Description: Saves quiz results to the MongoDB database.
Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## License

Quizer Backend is licensed under the [MIT License].
