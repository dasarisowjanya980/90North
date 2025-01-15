# 90North
Developed code for 90North is available here

**Chat Application**
This is a real-time chat application built with Node.js, Express, Socket.IO, and MongoDB on the backend, and plain HTML, CSS, and JavaScript on the frontend. The application allows users to sign up, log in, and chat with other registered users in real-time.

**Features**
1)User authentication (sign up, log in, log out).
2)Real-time messaging using Socket.IO.
3)Persistent chat messages stored in MongoDB.
4)Simple and responsive user interface.

**Prerequisites**
1)Ensure you have the following installed:
2)Node.js (v14 or higher)
3)MongoDB (local or cloud instance)
4)npm (Node Package Manager)

**Installation**
1)**_Clone the repository:**
git clone https://github.com/your-username/chat-app.git
cd chat-app
2)**_Install dependencies:_**
npm install
3)_**set up environment variables:**_
Create a .env file in the backend/ folder with the following variables:
MONGO_URI=mongodb://localhost:27017/chat-app
JWT_SECRET=your_jwt_secret
PORT=5000
4)**Start the MongoDB server (if running locally):**
mongod
**5)Run the application:**
npm start
The backend will be available at http://localhost:5000.

**Usage**
1)Open the index.html file in the frontend/ folder in a browser to access the application.
2)Sign up for a new account or log in with existing credentials.
3)Start a chat by selecting a user from the list.

**Scripts**
1)npm start: Starts the backend server.
2)npm run dev: Starts the backend server with hot reloading (requires nodemon).

**Dependencies**
**Backend**

express: Web framework for Node.js.

mongoose: MongoDB object modeling for Node.js.

bcryptjs: For hashing passwords.

jsonwebtoken: For user authentication.

socket.io: For real-time communication.

dotenv: For managing environment variables.

body-parser: To parse request bodies.

**Dev Dependencies**

nodemon: Automatically restarts the server during development.

**API Endpoints**

Authentication Routes (/api/auth)

POST /signup: Register a new user.

POST /login: Log in a user and return a token.

**Chat Routes (/api/chat)**

GET /messages/:userId: Fetch chat messages between the logged-in user and another user.

POST /send: Send a new chat message.

