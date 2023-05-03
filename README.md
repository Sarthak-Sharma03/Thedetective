
General Information :-

Introducing "The Detective" - a puzzle game designed to assess and enhance critical skills essential for success in the corporate world. Through this game, users can evaluate their Perseverance, Problem Solving, Time Management, and Leadership capabilities. With a seamless and engaging interface, the game challenges users to hone their thinking ability, attention to detail, and focus power. The objective of the game is to provide a comprehensive user experience that fosters self-awareness and skill development.


Theme of the Game :-

The game revolves around a detective investigating a crime scene. The suspect has provided a list of items in his room to the detective. Its upto the the detective to figure out which items are truly present and which have been falsely written in the list by the suspect. User is implored to help the detective to thoroughly investigate the crime scene.


Clues in the Game :-

Total five clues have been provided. Three are to judge false items and remaining two are external links for help.

1) Web of lies, web of lies. I spin a web and detective cries. (Spider)
2) I am round and round they say, something for a child to play. (Ball)
3) Knowledge, knowledge on all my pages, dont find me, break your cages. (Book)
4) A Wikipedia Page.
5) A tips and tricks article.


Dead Ends in the Game :-

1) If a user tries to falsified items without utilizing clues, they reach a dead end.
2) When the timer in the game expires after the duration of 3 minutes, reaches dead end.


Solution of Game :-

The game has only one solution, that is when the user finds all the hidden objects in the game within the given time limit (3 minutes).


List of Implemented Features :-

Following is the list of all the features which are implemented in the game - 

1) Created a dashboard of the Emails and User ID's of all the users who have logged in and played the game.
2) Created a dashboard of the Names and Scores of all the users who have played the game.
3) The soft skills assessed are - perseverance, problem solving, time management and leadership.
4) Created the game in an interactive and user friendly way.
5) Provided different clues, hints and references for the users, including external links. Requirement of minimum five clues, two dead ends and one solution also met.

Technical Information :-

a) Frontend and Backend Informtation -

1) The game's architecture was built using a suite of technologies including HTML, CSS, Node.js, Express.js, MongoDB, Mongoose.js, EJS, and Three.js.
2) User data generated during gameplay is stored in a MongoDB Atlas database.
3) Node.js is utilized to develop both the Frontend and Backend.
4) Express.js is implemented to create a server for the Backend.
5) Mongoose.js is utilized to facilitate communication between Node.js and MongoDB Atlas.
EJS Template Engine is used to design Frontend files and import data from MongoDB Atlas into the project.


b) Game Logic Information -
    
1) Three.js technology was utilized to develop the game mechanics of the puzzle game.
Controls for the game are established in the 'virtualjoystick.js' file and can be navigated using a mouse or trackpad.
2) Multiple object images were incorporated into the game and stored in the 'items' folder.
3) The game's CSS is defined within the 'game-style.css' file.
4) The placement of object images throughout the game is determined by the logic contained in the 'items.js' file.
Movement throughout the game's 3D-like panoramic environment is facilitated through the logic defined in the 'panoram.js' file.
5) Soothing background music has been incorporated into the game.
6) A timer in the form of an hourglass has been implemented, with a 3-minute countdown. Upon expiration, the game will conclude, and an alert will be displayed.
    
    
c) Game Scenery Information -

1) Object locations were determined utilizing Plane Geometry.
2) The environment was drawn using Sphere Geometry.
3) Selection of objects was facilitated through the use of Raycaster.
4) A list of selectable items is located at the top of the screen.


Steps  to run the project :-

1) Go to the project directory by using the command: cd project
2) Install all the required packages and dependencies using the command: npm install
3) Navigate to the src directory using the command: cd src
4) To run the application, execute the command: node app.js
5) The application is also available on Cyclic at the URL https://mystery-mansion.cyclic.app/.


Packages and Dependencies :-

The setup of this project has been accomplished by means of Node Package Manager (NPM). All of the dependencies used in this project have been installed through NPM. The following is a list of the dependencies that have been installed and utilized in this project:

1) mongoose.js - utilized to create a connection between Node.js and MongoDB Atlas, and to generate the Schema of the Collections in the Database.
2) express.js - utilized to establish a server to launch the application on the browser.
3) dotenv - utilized to create a config.env file that securely stores sensitive information such as the Database URL and Port Number.
4) ejs - utilized as a template engine in Node.js to generate HTML files for the Frontend.
5) validator - utilized to authenticate the validity of the Email entered by the user.


Different Routes :-

The application's routes have been defined within the 'views' folder, nested within the 'templates' folder. 'Templates' folder is present in 'src' folder.

1) index.ejs - This is the landing page of the application.
2) table.ejs - This page displays a table of Email IDs and User IDs for all users who have logged in to play the game.
3) login.ejs - This page features a form that prompts users to enter their email and set a password.
4) instructions.ejs - This page provides the game's rules and guidelines.
5) game.ejs - This page contains the HTML code for the game itself.
6) score.ejs - This page includes a form where users can input their name and game score.
7) result.ejs - This page displays the names and scores of all users who have played the game.
8) clues.ejs - This page contains various clues, hints, and references on how to play the game.


Database Information :-

For this application, MongoDB Atlas has been chosen as the online database to store the data. The MongoDB Atlas database used for this application is named 'Treasure_Hunt_Database' and it has two collections - 'users' and 'results'.

The 'users' collection contains the email and password of the users who play the game, while the 'results' collection contains the name and scores of the users who play the game.

The code for configuring the database is located in the 'db' folder of the application. This folder contains a file named 'conn.js' in which the connection between Node.js and MongoDB Atlas is defined using Mongoose.

Additionally, there is a folder named 'models' inside the 'db' folder. This folder contains two files - 'userSchema.js' and 'resultSchema.js'. The former defines the schema for the 'users' collection while the latter defines the schema for the 'results' collection.



