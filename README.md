# 90North
Developed code for 90North is available here
                              ****** TASK1******
                              FRONTEND DEVELOPMENT
  This is a responsive webpage featuring a fixed navbar, collapsible left menu, main content area, right-side panel, and footer. The layout adjusts based on screen size to provide an optimal user experience.

**Features**

Fixed Navbar:

Stays at the top of the page during scrolling.

Three Content Sections Below the Navbar:

Left Menu: Collapsible menu for navigation or additional content.

Main Content Area: The central area for displaying primary information.

Right Side Panel: For supplementary information or tools.

Footer:

Fixed at the bottom of the page, displaying site-wide information.

**Responsive Design:**

Adjusts layout and scaling for different screen sizes using CSS and JavaScript.

**Customizable Scaling:**

JavaScript dynamically scales the webpage based on screen width:

992px to 1600px: Shrinks to 90%.

700px to 767px: Shrinks to 80%.

600px to 700px: Shrinks to 75%.

Less than 600px: Shrinks to 50%.

**Folder Structure**

responsive-webpage/
├── index.html      # Main HTML file
├── styles.css      # Inline styling is included in HTML for this example
└── app.js          # JavaScript included within the HTML

**Prerequisites**

Ensure you have a modern web browser to run this project. No additional software or tools are required.

**Usage**

Clone the repository:

git clone https://github.com/your-username/responsive-webpage.git
cd responsive-webpage

Open index.html in your browser:

Open the file in a web browser or serve it using a local web server (e.g., Live Server in VS Code).

Interact with the webpage:

Use the toggle button in the left menu to collapse or expand the menu.

Resize the browser window to see the scaling adjustments.

How It Works**
**
HTML Structure:

Navbar, container, and footer sections are defined using semantic tags.

CSS Styling:

Flexbox ensures responsive layout for the left menu, main content, and right panel.

Media queries hide the left menu on small screens.

JavaScript Functions:

toggleMenu: Toggles the visibility of the left menu.

adjustPageWidth: Dynamically scales the webpage based on the screen width.

**Customization**

Adjust Scaling Thresholds:
Modify the adjustPageWidth function to change scaling behavior.

Styling:
Update styles directly in the <style> section or move them to an external styles.css file for modularity.

Left Menu Content:
Replace the placeholder text in .menu-content with navigation links or other components.



                                    ****TASK2****

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

