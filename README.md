
# Basic

This is a MERN Application.

### Tech Used
- React -> For the core of the Application
- Material UI -> For styling and components
- Redux Toolkit -> For managing states
- axios -> For HTTP requests
- react-router-dom -> For Routing between pages
- realm -> For Real Time Sync
- Nodejs -> For Backend
- Mongodb -> For the Database

The Real Time Sync is enabled due to the Realm library which keeps the logs of changes in a particular collection in the MongoDb Database. When any changes takes place it updates the states and using this state change as a reference we can easily update our applications states by an API to get the fresh data. 

## Run Locally

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

then 
```bash
  npm run dev
```


## Project Structure
