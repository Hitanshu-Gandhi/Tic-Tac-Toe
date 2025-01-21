# Tic-Tac-Toe Game Backend

This project implements the backend for a Tic-Tac-Toe game with user management and game history tracking. It demonstrates skills in API design, user authentication, and database management in a MERN (MongoDB, Express, React, Node.js) stack.

## Project Overview

This project implements a backend system where:

- Users can register, log in.
- Two authenticated users can start a Tic-Tac-Toe game, take turns, and play according to game rules.
- The game history is tracked, including opponent details, results, and a timeline.

### Tech Used

- React -> For the core of the Application
- Material UI -> For styling and components
- Redux Toolkit -> For managing states
- axios -> For HTTP requests
- react-router-dom -> For Routing between pages
- realm -> For Real Time Sync
- Backend Framework: Node.js, Express
- Database: MongoDB (with Mongoose for schema management)
- Authentication: JWT (JSON Web Tokens) for secure user login
- Game Logic: Custom server-side implementation for game state and validation

The Real Time Sync is enabled due to the Realm library which keeps the logs of changes in a particular collection in the MongoDb Database. When any changes takes place it updates the states and using this state change as a reference we can easily update our applications states by an API to get the fresh data.

#### Run Locally

After cloning go to the Client directory:

```bash
  cd client
```

Then you need to install the dependencies:

```bash
  npm install
```

Then You can start the project:

```bash
  npm start
```

Similarly for server:

```bash
  npm install
```

Create the .env file in server and
PORT=<Port_number>
TOKEN_SECRET=<Jwt_Token>
MONGO_URI=<your-url>
```

then

```bash
  npm run dev
```
